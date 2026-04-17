'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Calculator, ArrowRight, Check } from 'lucide-react'

const materials = [
  { name: 'Цемент М400 (50кг)', unit: 'мешок', price: 2800 },
  { name: 'Арматура 12мм (12м)', unit: 'шт', price: 4500 },
  { name: 'Кирпич облицовочный', unit: 'шт', price: 180 },
  { name: 'Песок строительный', unit: 'тонна', price: 3500 },
  { name: 'Щебень 20-40', unit: 'тонна', price: 5200 },
  { name: 'Бетон М300', unit: 'м³', price: 18500 },
  { name: 'Гипсокартон 12мм', unit: 'лист', price: 2200 },
  { name: 'Профиль UD', unit: 'шт', price: 450 },
]

export default function CalculatorPage() {
  const [items, setItems] = useState<{ material: number; qty: number }[]>([
    { material: 0, qty: 1 },
  ])
  const [distance, setDistance] = useState(10)

  const addItem = () => {
    setItems([...items, { material: 0, qty: 1 }])
  }

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index))
    }
  }

  const updateItem = (index: number, field: 'material' | 'qty', value: number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const subtotal = items.reduce((sum, item) => {
    const material = materials[item.material]
    return sum + material.price * item.qty
  }, 0)

  const deliveryCost = distance * 150
  const total = subtotal + deliveryCost

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Калькулятор <span className="text-primary">материалов</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-12">
              Рассчитайте стоимость материалов и доставки для вашего проекта
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <select
                        value={item.material}
                        onChange={(e) => updateItem(index, 'material', Number(e.target.value))}
                        className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-primary/50"
                      >
                        {materials.map((m, i) => (
                          <option key={i} value={i}>{m.name}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateItem(index, 'qty', Math.max(1, Number(e.target.value)))}
                        className="w-20 bg-background border border-border rounded-lg px-3 py-2 text-foreground text-center focus:outline-none focus:border-primary/50"
                      />
                      <span className="text-sm text-muted-foreground w-16">
                        {materials[item.material].unit}
                      </span>
                      <span className="font-semibold w-24 text-right">
                        {(materials[item.material].price * item.qty).toLocaleString()} ₸
                      </span>
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(index)}
                          className="text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  onClick={addItem}
                  className="w-full border-2 border-dashed border-border rounded-xl py-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  + Добавить материал
                </button>

                {/* Delivery */}
                <div className="bg-card border border-border rounded-xl p-4">
                  <label className="block text-sm font-medium mb-3">Расстояние доставки (км)</label>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 км</span>
                    <span className="text-primary font-semibold">{distance} км</span>
                    <span>200 км</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-6">Итого</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Материалы</span>
                      <span>{subtotal.toLocaleString()} ₸</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доставка ({distance} км)</span>
                      <span>{deliveryCost.toLocaleString()} ₸</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold text-lg">
                      <span>Всего</span>
                      <span className="text-primary">{total.toLocaleString()} ₸</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    Оформить заказ
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
