import { motion } from 'framer-motion'
import { Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  pharmacyAccounts,
  pharmacyCatalog,
  pharmacyDelegates,
  pharmacyRegions,
  deliveryOptions,
  type PharmacyCatalogProduct,
} from '../data/pharmacyOrder'
import type { PharmacyOrderContent } from '../data/types'

interface OrderLine {
  id: string
  productId: string
  quantity: number
}

function stopSlideNav(event: React.KeyboardEvent) {
  event.stopPropagation()
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.12em] text-white/55 uppercase">
      {children}
    </label>
  )
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={stopSlideNav}
      onClick={(event) => event.stopPropagation()}
      placeholder={placeholder}
      className="w-full rounded-xl border border-white/12 bg-black/35 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
    />
  )
}

function SelectInput({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={stopSlideNav}
      onClick={(event) => event.stopPropagation()}
      className="w-full rounded-xl border border-white/12 bg-black/35 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-[#0e1014] text-white">
          {option.label}
        </option>
      ))}
    </select>
  )
}

function productLabel(product: PharmacyCatalogProduct | undefined): string {
  if (!product) return 'Select a product'
  return `${product.brand} — ${product.name} (${product.packSize})`
}

let lineCounter = 0
function createLine(productId = ''): OrderLine {
  lineCounter += 1
  return { id: `line-${lineCounter}`, productId, quantity: 1 }
}

export function PharmacyOrderScreen({ content }: { content: PharmacyOrderContent }) {
  const [pharmacyAccount, setPharmacyAccount] = useState('new')
  const [region, setRegion] = useState(pharmacyRegions[0]?.value ?? '')
  const [delegate, setDelegate] = useState(pharmacyDelegates[0]?.value ?? '')
  const [delivery, setDelivery] = useState(deliveryOptions[0]?.value ?? '')
  const [pharmacyName, setPharmacyName] = useState('')
  const [pharmacyCode, setPharmacyCode] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [poReference, setPoReference] = useState('')
  const [notes, setNotes] = useState('')
  const [lines, setLines] = useState<OrderLine[]>([createLine(), createLine()])
  const [submitted, setSubmitted] = useState(false)

  const isNewPharmacy = pharmacyAccount === 'new'
  const selectedProducts = useMemo(
    () =>
      lines
        .map((line) => {
          const product = pharmacyCatalog.find((item) => item.id === line.productId)
          return product ? { ...line, product } : null
        })
        .filter(Boolean) as (OrderLine & { product: PharmacyCatalogProduct })[],
    [lines],
  )
  const totalUnits = selectedProducts.reduce((sum, line) => sum + line.quantity, 0)

  const updateLine = (lineId: string, patch: Partial<OrderLine>) => {
    setLines((current) =>
      current.map((line) => (line.id === lineId ? { ...line, ...patch } : line)),
    )
  }

  const addLine = () => {
    setLines((current) => [...current, createLine()])
  }

  const removeLine = (lineId: string) => {
    setLines((current) => (current.length <= 1 ? current : current.filter((line) => line.id !== lineId)))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setSubmitted(true)
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 520px at 12% -5%, rgba(46, 110, 184, 0.28), transparent 55%), radial-gradient(700px 420px at 95% 100%, rgba(255, 107, 44, 0.12), transparent 50%), linear-gradient(180deg, #07101c 0%, #0a1524 45%, #061018 100%)',
        }}
      />
      <motion.img
        src="/images/pierre-fabre/marques-produits.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/80 via-[#061018]/88 to-[#061018]/95" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex h-full flex-col px-5 py-4 lg:px-8 lg:py-5"
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/pierre-fabre/logo.svg"
              alt="Pierre Fabre"
              className="h-8 w-auto lg:h-9"
            />
            <div>
              {content.eyebrow ? (
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                  {content.eyebrow}
                </p>
              ) : null}
              <h2 className="font-display text-xl font-semibold text-white lg:text-2xl">
                {content.title ?? 'Pharmacy order'}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
            <ShoppingCart className="h-3.5 w-3.5 text-accent" />
            {totalUnits} unit{totalUnits === 1 ? '' : 's'} · {selectedProducts.length} product
            {selectedProducts.length === 1 ? '' : 's'}
          </div>
        </div>

        {content.subtitle ? (
          <p className="mb-3 max-w-4xl text-sm text-white/65">{content.subtitle}</p>
        ) : null}

        <div className="scrollbar-thin grid min-h-0 flex-1 gap-3 overflow-auto pr-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
              Pharmacy & delivery
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FieldLabel>Pharmacy account</FieldLabel>
                <SelectInput
                  value={pharmacyAccount}
                  onChange={setPharmacyAccount}
                  options={pharmacyAccounts}
                />
              </div>

              {isNewPharmacy ? (
                <>
                  <div>
                    <FieldLabel>Pharmacy name</FieldLabel>
                    <TextInput
                      value={pharmacyName}
                      onChange={setPharmacyName}
                      placeholder="Farmacia Centrale"
                    />
                  </div>
                  <div>
                    <FieldLabel>Pharmacy code / CIP</FieldLabel>
                    <TextInput
                      value={pharmacyCode}
                      onChange={setPharmacyCode}
                      placeholder="CIP 1234"
                    />
                  </div>
                </>
              ) : null}

              <div>
                <FieldLabel>Region</FieldLabel>
                <SelectInput value={region} onChange={setRegion} options={pharmacyRegions} />
              </div>
              <div>
                <FieldLabel>Sales delegate</FieldLabel>
                <SelectInput value={delegate} onChange={setDelegate} options={pharmacyDelegates} />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel>Delivery option</FieldLabel>
                <SelectInput value={delivery} onChange={setDelivery} options={deliveryOptions} />
              </div>
            </div>

            <p className="pt-1 text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
              Contact & references
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <FieldLabel>Contact name</FieldLabel>
                <TextInput
                  value={contactName}
                  onChange={setContactName}
                  placeholder="Pharmacist on duty"
                />
              </div>
              <div>
                <FieldLabel>Phone</FieldLabel>
                <TextInput
                  value={contactPhone}
                  onChange={setContactPhone}
                  placeholder="+39 02 1234 5678"
                  type="tel"
                />
              </div>
              <div>
                <FieldLabel>Email</FieldLabel>
                <TextInput
                  value={contactEmail}
                  onChange={setContactEmail}
                  placeholder="pharmacy@example.com"
                  type="email"
                />
              </div>
              <div>
                <FieldLabel>PO / internal reference</FieldLabel>
                <TextInput
                  value={poReference}
                  onChange={setPoReference}
                  placeholder="PO-2025-0842"
                />
              </div>
              <div className="sm:col-span-2">
                <FieldLabel>Order notes</FieldLabel>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  onKeyDown={stopSlideNav}
                  onClick={(event) => event.stopPropagation()}
                  rows={3}
                  placeholder="Promo, backorder tolerance, delivery instructions…"
                  className="w-full resize-none rounded-xl border border-white/12 bg-black/35 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
                Products
              </p>
              <button
                type="button"
                onClick={addLine}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent/20"
              >
                <Plus className="h-3.5 w-3.5" />
                Add product
              </button>
            </div>

            <div className="scrollbar-thin min-h-0 flex-1 space-y-2 overflow-auto pr-1">
              {lines.map((line, index) => (
                <div
                  key={line.id}
                  className="grid gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:grid-cols-[minmax(0,1fr)_88px_40px]"
                >
                  <div>
                    <FieldLabel>Product {index + 1}</FieldLabel>
                    <select
                      value={line.productId}
                      onChange={(event) => updateLine(line.id, { productId: event.target.value })}
                      onKeyDown={stopSlideNav}
                      onClick={(event) => event.stopPropagation()}
                      className="w-full rounded-xl border border-white/12 bg-black/35 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="" className="bg-[#0e1014]">
                        Select a product…
                      </option>
                      {pharmacyCatalog.map((product) => (
                        <option key={product.id} value={product.id} className="bg-[#0e1014]">
                          {productLabel(product)} · {product.category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <FieldLabel>Qty</FieldLabel>
                    <input
                      type="number"
                      min={1}
                      max={999}
                      value={line.quantity}
                      onChange={(event) =>
                        updateLine(line.id, {
                          quantity: Math.max(1, Number(event.target.value) || 1),
                        })
                      }
                      onKeyDown={stopSlideNav}
                      onClick={(event) => event.stopPropagation()}
                      className="w-full rounded-xl border border-white/12 bg-black/35 px-3 py-2.5 text-sm text-white outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => removeLine(line.id)}
                      disabled={lines.length <= 1}
                      className="flex h-[42px] w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/55 transition hover:border-rose-400/40 hover:bg-rose-500/10 hover:text-rose-300 disabled:cursor-not-allowed disabled:opacity-35"
                      aria-label="Remove product line"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <p className="text-[11px] font-semibold tracking-[0.12em] text-white/45 uppercase">
                Order summary
              </p>
              {selectedProducts.length > 0 ? (
                <ul className="mt-2 space-y-1.5 text-sm text-white/80">
                  {selectedProducts.map((line) => (
                    <li key={line.id} className="flex items-start justify-between gap-3">
                      <span>
                        {line.product.brand} — {line.product.name}
                      </span>
                      <span className="shrink-0 font-semibold text-accent">× {line.quantity}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-white/45">Select at least one product to continue.</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          {submitted ? (
            <p className="text-sm font-medium text-emerald-400">
              Order captured — ready to sync with your pharmacy ERP / wholesaler workflow.
            </p>
          ) : (
            <p className="text-sm text-white/50">
              Integrate orders directly from the field — no re-keying back at the office.
            </p>
          )}
          <button
            type="submit"
            disabled={selectedProducts.length === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ShoppingCart className="h-4 w-4" />
            Submit order
          </button>
        </div>
      </form>
    </div>
  )
}
