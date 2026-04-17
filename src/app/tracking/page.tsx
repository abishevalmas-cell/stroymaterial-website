'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Search, Truck, Package, CheckCircle, Clock, MapPin } from 'lucide-react'

const mockOrders: Record<string, any> = {
  'SM-2026-0001': {
    number: 'SM-2026-0001',
    status: 'delivering',
    statusText: 'В пути',
    date: '10 апреля 2025',
    total: '19 250 ₸',
    items: [
      { name: 'Цемент М400 (50кг)', qty: 10 },
      { name: 'Песок строительный', qty: 2 },
    ],
    tracking: [
      { status: 'Заказ оформлен', date: '8 апр, 14:30', done: true },
      { status: 'Оплачен', date: '8 апр, 14:35', done: true },
      { status: 'Собран на складе', date: '9 апр, 09:15', done: true },
      { status: 'В пути', date: '10 апр, 08:00', done: true, current: true },
      { status: 'Доставлен', date: '', done: false },
    ],
    driver: { name: 'Азамат К.', phone: '+7 701 234 56 78' },
    eta: 'Сегодня, 14:00 - 16:00',
  },
  'SM-2026-0002': {
    number: 'SM-2026-0002',
    status: 'assembling',
    statusText: 'Собирается',
    date: '9 апреля 2025',
    total: '223 830 ₸',
    items: [
      { name: 'Арматура 12мм (12м)', qty: 50 },
      { name: 'Бетон М300', qty: 10 },
    ],
    tracking: [
      { status: 'Заказ оформлен', date: '7 апр, 10:20', done: true },
      { status: 'Оплачен', date: '7 апр, 10:25', done: true },
      { status: 'Собирается на складе', date: '9 апр, 11:00', done: true, current: true },
      { status: 'В пути', date: '', done: false },
      { status: 'Доставлен', date: '', done: false },
    ],
    driver: null,
    eta: '12 апреля',
  },
}

export default function TrackingPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [order, setOrder] = useState<any>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setOrder(null)

    setTimeout(() => {
      const found = mockOrders[orderNumber.toUpperCase()]
      if (found) {
        setOrder(found)
      } else {
        setError('Заказ не найден. Проверьте номер и попробуйте снова.')
      }
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Отследить <span className="text-primary">заказ</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-10">
              Введите номер заказа, чтобы узнать его статус
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex gap-3 mb-8">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="SM-2026-0001"
                className="flex-1 bg-card border border-border rounded-xl px-5 py-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <Clock className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                Найти
              </button>
            </form>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 mb-8">
                {error}
              </div>
            )}

            {/* Order details */}
            {order && (
              <div className="space-y-6">
                {/* Header */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Заказ</div>
                      <div className="text-xl font-bold">{order.number}</div>
                    </div>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      {order.statusText}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Дата</div>
                      <div className="font-medium">{order.date}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Сумма</div>
                      <div className="font-medium">{order.total}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ожидаемая доставка</div>
                      <div className="font-medium">{order.eta}</div>
                    </div>
                  </div>
                </div>

                {/* Tracking steps */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Статус доставки</h3>
                  <div className="space-y-0">
                    {order.tracking.map((step: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            step.done ? 'bg-primary' : 'bg-muted'
                          }`}>
                            {step.done ? (
                              <CheckCircle className="w-5 h-5 text-primary-foreground" />
                            ) : (
                              <Clock className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                          {index < order.tracking.length - 1 && (
                            <div className={`w-0.5 h-12 ${step.done ? 'bg-primary' : 'bg-muted'}`} />
                          )}
                        </div>
                        <div className={`pb-8 ${step.current ? '' : 'opacity-60'}`}>
                          <div className="font-medium">{step.status}</div>
                          {step.date && (
                            <div className="text-sm text-muted-foreground">{step.date}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Состав заказа</h3>
                  <div className="space-y-3">
                    {order.items.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">× {item.qty}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Driver */}
                {order.driver && (
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Водитель</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{order.driver.name}</div>
                        <a href={`tel:${order.driver.phone}`} className="text-sm text-primary hover:underline">
                          {order.driver.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Demo hint */}
            {!order && !error && (
              <div className="bg-secondary rounded-xl p-6 text-center">
                <p className="text-muted-foreground mb-2">Демо-данные для тестирования:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => { setOrderNumber('SM-2026-0001'); }}
                    className="bg-card border border-border px-4 py-2 rounded-lg text-sm hover:border-primary/50 transition-colors"
                  >
                    SM-2026-0001 (В пути)
                  </button>
                  <button
                    onClick={() => { setOrderNumber('SM-2026-0002'); }}
                    className="bg-card border border-border px-4 py-2 rounded-lg text-sm hover:border-primary/50 transition-colors"
                  >
                    SM-2026-0002 (Собирается)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
