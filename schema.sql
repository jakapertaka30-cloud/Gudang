-- WMS Mattress: PostgreSQL / Supabase schema
create extension if not exists pgcrypto;

create table if not exists roles (
  id uuid primary key default gen_random_uuid(),
  name text unique not null check (name in ('ADMIN','WAREHOUSE STAFF','SUPERVISOR'))
);

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role_id uuid references roles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  created_at timestamptz default now()
);

create table if not exists suppliers (
  id uuid primary key default gen_random_uuid(),
  supplier_code text unique not null,
  supplier_name text not null,
  contact_person text, phone text, email text, address text, category text,
  status text not null default 'Active',
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  warehouse text not null, area text not null, rack text not null, bin text not null,
  capacity numeric default 0, status text default 'Active',
  created_at timestamptz default now(), updated_at timestamptz default now(),
  unique(warehouse,area,rack,bin)
);

create table if not exists materials (
  id uuid primary key default gen_random_uuid(),
  sku text unique not null, material_name text not null,
  category_id uuid references categories(id), unit text not null,
  minimum_stock numeric default 0, maximum_stock numeric default 0,
  primary_supplier_id uuid references suppliers(id),
  primary_location_id uuid references locations(id),
  status text default 'Active',
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists receivings (
  id uuid primary key default gen_random_uuid(),
  receiving_no text unique not null, received_date date not null default current_date,
  supplier_id uuid references suppliers(id), reference_no text, po_number text,
  received_by uuid references profiles(id), notes text,
  status text default 'DRAFT', created_at timestamptz default now(), updated_at timestamptz default now()
);

create table if not exists receiving_details (
  id uuid primary key default gen_random_uuid(),
  receiving_id uuid references receivings(id) on delete cascade,
  material_id uuid references materials(id), qty_ordered numeric default 0,
  qty_received numeric not null check(qty_received>=0), unit text, condition text, notes text
);

create table if not exists putaways (
  id uuid primary key default gen_random_uuid(),
  putaway_no text unique not null, receiving_id uuid references receivings(id),
  material_id uuid references materials(id), location_id uuid references locations(id),
  qty numeric not null check(qty>0), putaway_date timestamptz default now(),
  user_id uuid references profiles(id)
);

create table if not exists issuings (
  id uuid primary key default gen_random_uuid(),
  issuing_no text unique not null, issuing_date date default current_date,
  department text, requested_by text, purpose text, notes text,
  status text default 'DRAFT', created_at timestamptz default now()
);

create table if not exists issuing_details (
  id uuid primary key default gen_random_uuid(),
  issuing_id uuid references issuings(id) on delete cascade,
  material_id uuid references materials(id), location_id uuid references locations(id),
  qty numeric not null check(qty>0), unit text
);

create table if not exists stock (
  id uuid primary key default gen_random_uuid(),
  material_id uuid references materials(id) not null,
  location_id uuid references locations(id) not null,
  qty numeric not null default 0 check(qty>=0),
  updated_at timestamptz default now(),
  unique(material_id,location_id)
);

create table if not exists stock_movements (
  id uuid primary key default gen_random_uuid(),
  movement_no text unique not null, movement_at timestamptz default now(),
  material_id uuid references materials(id), location_id uuid references locations(id),
  movement_type text not null check(movement_type in ('RECEIVING','PUTAWAY','ISSUING','STOCK OPNAME','ADJUSTMENT')),
  qty_in numeric default 0, qty_out numeric default 0, balance numeric not null,
  reference_no text, user_id uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists stock_opnames (
  id uuid primary key default gen_random_uuid(),
  opname_no text unique not null, opname_date date default current_date,
  location_id uuid references locations(id), material_id uuid references materials(id),
  system_stock numeric not null, status text default 'OPEN',
  counted_by uuid references profiles(id), created_at timestamptz default now()
);

create table if not exists stock_opname_details (
  id uuid primary key default gen_random_uuid(),
  opname_id uuid references stock_opnames(id) on delete cascade,
  physical_stock numeric not null, difference numeric generated always as (physical_stock) stored,
  notes text
);

create table if not exists stock_adjustments (
  id uuid primary key default gen_random_uuid(),
  adjustment_no text unique not null, opname_id uuid references stock_opnames(id),
  material_id uuid references materials(id), location_id uuid references locations(id),
  system_stock numeric not null, physical_stock numeric not null, difference numeric not null,
  reason text not null, requested_by uuid references profiles(id),
  requested_at timestamptz default now(), status text default 'PENDING',
  approved_by uuid references profiles(id), approved_at timestamptz, rejection_reason text
);

create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  log_at timestamptz default now(), user_id uuid references profiles(id),
  role_name text, module text, action text, reference_no text,
  before_data jsonb, after_data jsonb, status text
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id), type text, title text, message text,
  is_read boolean default false, created_at timestamptz default now()
);

insert into roles(name) values ('ADMIN'),('WAREHOUSE STAFF'),('SUPERVISOR')
on conflict(name) do nothing;

alter table profiles enable row level security;
alter table materials enable row level security;
alter table suppliers enable row level security;
alter table locations enable row level security;
alter table stock enable row level security;
alter table stock_movements enable row level security;
alter table stock_adjustments enable row level security;
alter table audit_logs enable row level security;

-- Production deployment should add role-aware policies using auth.uid()
-- and profiles.role_id. Do not expose service_role_key in frontend.
