import type React from "react"
import { useEffect, useRef } from "react"

const PhotographyBanner: React.FC = () => {
  const canvasRef1 = useRef<HTMLCanvasElement>(null)
  const canvasRef2 = useRef<HTMLCanvasElement>(null)
  const canvasRef3 = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Bar chart — зарплата
    const c1 = canvasRef1.current
    if (c1) {
      const ctx = c1.getContext("2d")!
      const data = [45, 65, 85, 110, 140]
      const labels = ["2020", "2021", "2022", "2023", "2024"]
      const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8"]
      const maxVal = 160
      const barW = 36
      const gap = 20
      const offsetX = 40
      const offsetY = 20
      const chartH = c1.height - 50

      ctx.clearRect(0, 0, c1.width, c1.height)
      ctx.strokeStyle = "rgba(255,255,255,0.1)"
      ctx.lineWidth = 1
      for (let i = 0; i <= 4; i++) {
        const y = offsetY + (chartH / 4) * i
        ctx.beginPath()
        ctx.moveTo(offsetX, y)
        ctx.lineTo(c1.width - 10, y)
        ctx.stroke()
        ctx.fillStyle = "rgba(255,255,255,0.4)"
        ctx.font = "10px Inter"
        ctx.fillText(String(Math.round(maxVal - (maxVal / 4) * i)), 2, y + 4)
      }

      data.forEach((val, i) => {
        const barH = (val / maxVal) * chartH
        const x = offsetX + i * (barW + gap)
        const y = offsetY + chartH - barH

        const grad = ctx.createLinearGradient(0, y, 0, y + barH)
        grad.addColorStop(0, colors[i])
        grad.addColorStop(1, "rgba(59,130,246,0.3)")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0])
        ctx.fill()

        ctx.fillStyle = "#fff"
        ctx.font = "bold 11px Inter"
        ctx.textAlign = "center"
        ctx.fillText(val + "т", x + barW / 2, y - 5)

        ctx.fillStyle = "rgba(255,255,255,0.6)"
        ctx.font = "10px Inter"
        ctx.fillText(labels[i], x + barW / 2, c1.height - 5)
      })
    }

    // Donut chart — распределение по отраслям
    const c2 = canvasRef2.current
    if (c2) {
      const ctx = c2.getContext("2d")!
      const segments = [
        { val: 38, color: "#3b82f6", label: "Оборонка" },
        { val: 28, color: "#10b981", label: "Металлургия" },
        { val: 18, color: "#f59e0b", label: "Приборостроение" },
        { val: 16, color: "#8b5cf6", label: "Авто/ж.д." },
      ]
      const total = segments.reduce((s, x) => s + x.val, 0)
      const cx = c2.width / 2 - 10
      const cy = c2.height / 2
      const r = 65
      const ir = 38

      ctx.clearRect(0, 0, c2.width, c2.height)
      let startAngle = -Math.PI / 2

      segments.forEach((seg) => {
        const angle = (seg.val / total) * 2 * Math.PI
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.arc(cx, cy, r, startAngle, startAngle + angle)
        ctx.closePath()
        ctx.fillStyle = seg.color
        ctx.fill()

        ctx.beginPath()
        ctx.arc(cx, cy, ir, 0, 2 * Math.PI)
        ctx.fillStyle = "#0f172a"
        ctx.fill()

        startAngle += angle
      })

      ctx.fillStyle = "#fff"
      ctx.font = "bold 14px Inter"
      ctx.textAlign = "center"
      ctx.fillText("Вакансии", cx, cy - 5)
      ctx.font = "11px Inter"
      ctx.fillStyle = "rgba(255,255,255,0.6)"
      ctx.fillText("по отраслям", cx, cy + 10)

      let legendY = 20
      segments.forEach((seg) => {
        ctx.fillStyle = seg.color
        ctx.fillRect(c2.width - 95, legendY, 10, 10)
        ctx.fillStyle = "rgba(255,255,255,0.8)"
        ctx.font = "10px Inter"
        ctx.textAlign = "left"
        ctx.fillText(`${seg.label} ${seg.val}%`, c2.width - 80, legendY + 9)
        legendY += 22
      })
    }

    // Line chart — потребность рынка
    const c3 = canvasRef3.current
    if (c3) {
      const ctx = c3.getContext("2d")!
      const dataLine = [120, 145, 160, 190, 230, 270, 310]
      const labelsLine = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"]
      const maxV = 350
      const padL = 35
      const padB = 25
      const padT = 20
      const w = c3.width - padL - 10
      const h = c3.height - padB - padT

      ctx.clearRect(0, 0, c3.width, c3.height)

      ctx.strokeStyle = "rgba(255,255,255,0.1)"
      ctx.lineWidth = 1
      for (let i = 0; i <= 4; i++) {
        const y = padT + (h / 4) * i
        ctx.beginPath()
        ctx.moveTo(padL, y)
        ctx.lineTo(c3.width - 10, y)
        ctx.stroke()
        ctx.fillStyle = "rgba(255,255,255,0.4)"
        ctx.font = "10px Inter"
        ctx.textAlign = "right"
        ctx.fillText(String(Math.round(maxV - (maxV / 4) * i)), padL - 3, y + 4)
      }

      const grad = ctx.createLinearGradient(0, padT, 0, padT + h)
      grad.addColorStop(0, "rgba(59,130,246,0.4)")
      grad.addColorStop(1, "rgba(59,130,246,0)")
      ctx.fillStyle = grad
      ctx.beginPath()
      dataLine.forEach((val, i) => {
        const x = padL + (i / (dataLine.length - 1)) * w
        const y = padT + h - (val / maxV) * h
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.lineTo(padL + w, padT + h)
      ctx.lineTo(padL, padT + h)
      ctx.closePath()
      ctx.fill()

      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2.5
      ctx.lineJoin = "round"
      ctx.beginPath()
      dataLine.forEach((val, i) => {
        const x = padL + (i / (dataLine.length - 1)) * w
        const y = padT + h - (val / maxV) * h
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      })
      ctx.stroke()

      dataLine.forEach((val, i) => {
        const x = padL + (i / (dataLine.length - 1)) * w
        const y = padT + h - (val / maxV) * h
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = "#3b82f6"
        ctx.fill()
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 1.5
        ctx.stroke()

        ctx.fillStyle = "rgba(255,255,255,0.6)"
        ctx.font = "9px Inter"
        ctx.textAlign = "center"
        ctx.fillText(labelsLine[i], x, padT + h + 14)
      })
    }
  }, [])

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 40%, #0d1b2a 100%)",
      fontFamily: "'Inter', 'Montserrat', sans-serif",
      color: "#fff",
      padding: "0",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .infog-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        .accent-blue { color: #3b82f6; }
        .accent-green { color: #10b981; }
        .accent-yellow { color: #f59e0b; }
        .tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .tag-blue { background: rgba(59,130,246,0.2); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
        .tag-green { background: rgba(16,185,129,0.2); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
        .tag-yellow { background: rgba(245,158,11,0.2); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
        .divider { width: 100%; height: 1px; background: rgba(255,255,255,0.07); margin: 0; }
        .stat-num { font-size: 32px; font-weight: 800; line-height: 1; }
        .dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 28, position: "relative" }}>
          <div style={{
            position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
            width: 500, height: 200, background: "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <span className="tag tag-blue" style={{ marginBottom: 10, display: "inline-block" }}>ИНФОГРАФИКА • ЧЕЛЯБИНСКАЯ ОБЛАСТЬ • 2024</span>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(22px, 4vw, 42px)",
            fontWeight: 900,
            lineHeight: 1.15,
            background: "linear-gradient(90deg, #fff 0%, #93c5fd 50%, #60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 8,
          }}>
            Инженер-технолог машиностроения
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
            Одна из наиболее <span style={{ color: "#f59e0b" }}>востребованных</span> инженерных специальностей Урала
          </p>
        </div>

        {/* TOP STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 18 }}>
          {[
            { num: "1 400+", label: "Вакансий в регионе", sub: "по данным hh.ru 2024", color: "#3b82f6" },
            { num: "↑ 34%", label: "Рост спроса за 3 года", sub: "оборонный заказ + нацпроекты", color: "#10b981" },
            { num: "85–140", label: "Зарплата, тыс. ₽", sub: "медиана — 105 тыс. ₽", color: "#f59e0b" },
            { num: "97%", label: "Трудоустройство", sub: "выпускников ЮУрГУ/ЧГУ", color: "#8b5cf6" },
          ].map((s, i) => (
            <div key={i} className="infog-card" style={{ padding: "18px 16px", textAlign: "center" }}>
              <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6, color: "#fff" }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>

          {/* LEFT COL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Описание */}
            <div className="infog-card" style={{ padding: "20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚙️</div>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Кто такой инженер-технолог?</span>
              </div>
              <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Специалист, который разрабатывает и оптимизирует <span style={{ color: "#60a5fa" }}>производственные процессы</span> — от чертежа до готовой детали. Контролирует качество, выбирает оборудование и инструменты, снижает себестоимость изделий.
              </p>
              <div style={{ marginTop: 14 }}>
                {["Разработка техпроцессов", "Контроль качества ОТК", "Оптимизация производства", "Работа с ЧПУ и CAD/CAM"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div className="dot" style={{ background: "#3b82f6" }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Почему востребован */}
            <div className="infog-card" style={{ padding: "20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔥</div>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Почему востребован в Челябинске?</span>
              </div>
              {[
                { icon: "🛡️", text: "Оборонный заказ увеличен в 3× — ЧТЗ, ЗВО, КЗ", color: "#f59e0b" },
                { icon: "🏗️", text: "90+ машиностроительных заводов в регионе", color: "#10b981" },
                { icon: "📉", text: "Дефицит кадров: на 1 выпускника — 4 вакансии", color: "#ef4444" },
                { icon: "🚀", text: "Цифровизация производства — нужны IT+инженеры", color: "#8b5cf6" },
                { icon: "💰", text: "Нацпроект «Производительность труда»", color: "#3b82f6" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{r.icon}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{r.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE COL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Bar chart зарплата */}
            <div className="infog-card" style={{ padding: "18px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 13 }}>💸 Рост зарплат (тыс. ₽/мес)</span>
                <span className="tag tag-green">+211% за 5 лет</span>
              </div>
              <canvas ref={canvasRef1} width={280} height={160} style={{ width: "100%", height: 160 }} />
              <div style={{ display: "flex", gap: 16, marginTop: 10, justifyContent: "center" }}>
                {[["Нач.", "55–70"], ["Опыт 3+", "85–110"], ["Сеньор", "130–160+"]].map(([l, v], i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#60a5fa" }}>{v}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Line chart — рост вакансий */}
            <div className="infog-card" style={{ padding: "18px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 13 }}>📈 Вакансии в регионе</span>
                <span className="tag tag-blue">+158%</span>
              </div>
              <canvas ref={canvasRef3} width={280} height={150} style={{ width: "100%", height: 150 }} />
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6, textAlign: "center" }}>количество открытых вакансий по годам</p>
            </div>

            {/* Donut */}
            <div className="infog-card" style={{ padding: "18px 16px" }}>
              <span style={{ fontWeight: 700, fontSize: 13, display: "block", marginBottom: 8 }}>🏭 Распределение по отраслям</span>
              <canvas ref={canvasRef2} width={280} height={120} style={{ width: "100%", height: 120 }} />
            </div>
          </div>

          {/* RIGHT COL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Где работать */}
            <div className="infog-card" style={{ padding: "20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🏭</div>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Где работать</span>
              </div>
              {[
                { name: "ЧТЗ — Уралтрак", spec: "тракторы, гусеничная техника", sal: "90–130т", tag: "tag-blue" },
                { name: "Завод «Вибромашина»", spec: "промышленное оборудование", sal: "85–120т", tag: "tag-green" },
                { name: "ПГ «КОНАР»", spec: "нефтегазовое машиностроение", sal: "95–145т", tag: "tag-yellow" },
                { name: "КЗ «Станкомаш»", spec: "оборонная промышленность", sal: "100–160т", tag: "tag-blue" },
                { name: "ЧКПЗ", spec: "автокомпоненты, поковки", sal: "80–115т", tag: "tag-green" },
                { name: "Метран (Emerson)", spec: "приборостроение", sal: "95–130т", tag: "tag-yellow" },
              ].map((w, i) => (
                <div key={i} style={{ padding: "8px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 600 }}>{w.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{w.spec}</div>
                    </div>
                    <span className={`tag ${w.tag}`} style={{ flexShrink: 0, marginLeft: 8 }}>{w.sal}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Где учиться */}
            <div className="infog-card" style={{ padding: "20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(139,92,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🎓</div>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Где учиться</span>
              </div>
              {[
                { name: "ЮУрГУ", prog: "Технология машиностроения", dur: "4 года", type: "Бакалавриат", color: "#8b5cf6" },
                { name: "ЧГУ им. Курчатова", prog: "Машиностроение", dur: "4 года", type: "Бакалавриат", color: "#3b82f6" },
                { name: "МГТУ им. Носова (Магнитогорск)", prog: "Технологические машины", dur: "4 года", type: "Бакалавриат", color: "#10b981" },
                { name: "ЮУрГУ", prog: "Технология машиностроения", dur: "2 года", type: "Магистратура", color: "#f59e0b" },
                { name: "ЧМТ, ЧМК", prog: "Технология машиностроения", dur: "3,5 года", type: "СПО/Колледж", color: "#ef4444" },
              ].map((u, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 3, borderRadius: 3, flexShrink: 0, alignSelf: "stretch", background: u.color, minHeight: 36 }} />
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700 }}>{u.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{u.prog}</div>
                    <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                      <span className="tag tag-blue" style={{ fontSize: 10 }}>{u.type}</span>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", lineHeight: "20px" }}>⏱ {u.dur}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="infog-card" style={{ marginTop: 14, padding: "16px 20px", display: "flex", gap: 24, justifyContent: "space-around", flexWrap: "wrap" }}>
          {[
            { icon: "🎯", title: "Карьерный рост", text: "Технолог → Ст. технолог → Нач. ТБ → Гл. технолог → Директор по производству" },
            { icon: "💻", title: "Цифровые навыки", text: "САПР (AutoCAD, SolidWorks, КОМПАС), CAM-системы, 1С:Производство, MES-системы" },
            { icon: "🌍", title: "Перспективы", text: "ОПК, импортозамещение, «Сделано в России» — спрос растёт быстрее, чем выпуск кадров" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: "1 1 250px" }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{b.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{b.title}</div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{b.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          Источники: hh.ru, Министерство труда Челябинской области, открытые данные предприятий • 2024
        </div>
      </div>
    </div>
  )
}

export default PhotographyBanner
