'use client'

import { useRef } from 'react'

export default function Home() {
  const canvasRef = useRef(null)

  const downloadImage = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = 800
    canvas.height = 600
    
    // Background
    ctx.fillStyle = '#f8f9fa'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    // Border
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 3
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20)
    
    // Header background
    ctx.fillStyle = '#2c3e50'
    ctx.fillRect(20, 20, canvas.width - 40, 80)
    
    // Title
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 32px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('QUADRO DE HORÁRIOS', canvas.width / 2, 70)
    
    // Route header
    ctx.fillStyle = '#34495e'
    ctx.fillRect(20, 110, canvas.width - 40, 60)
    
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 28px Arial'
    ctx.textAlign = 'left'
    ctx.fillText('Pilar', 50, 145)
    
    ctx.textAlign = 'center'
    ctx.fillText('→', canvas.width / 2, 145)
    
    ctx.textAlign = 'right'
    ctx.fillText('Cangulo', canvas.width - 50, 145)
    
    // Schedule background
    ctx.fillStyle = '#ecf0f1'
    ctx.fillRect(20, 180, canvas.width - 40, canvas.height - 210)
    
    // Schedule times
    const times = [
      '•05:00', '•06:00', '•07:00', '•08:00', '•09:10', '•10:20',
      '•11:30', '•12:40', '•13:40', '•14:50', '•16:00', '•17:00',
      '•18:00', '•19:10', '•20:20', '•21:30'
    ]
    
    ctx.fillStyle = '#2c3e50'
    ctx.font = 'bold 24px Arial'
    ctx.textAlign = 'left'
    
    let x = 60
    let y = 220
    const itemsPerRow = 4
    const rowHeight = 50
    const colWidth = 170
    
    times.forEach((time, index) => {
      if (index > 0 && index % itemsPerRow === 0) {
        y += rowHeight
        x = 60
      }
      
      ctx.fillText(time, x, y)
      x += colWidth
    })
    
    // Footer
    ctx.fillStyle = '#7f8c8d'
    ctx.font = '16px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Horários sujeitos a alterações', canvas.width / 2, canvas.height - 30)
    
    // Download
    const link = document.createElement('a')
    link.download = 'quadro-horarios-pilar-cangulo.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Gerador de Quadro de Horários
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="border-4 border-gray-800 bg-gray-50 p-6">
            {/* Header */}
            <div className="bg-slate-700 text-white p-4 mb-4 rounded">
              <h2 className="text-2xl font-bold text-center">QUADRO DE HORÁRIOS</h2>
            </div>
            
            {/* Route */}
            <div className="bg-slate-600 text-white p-4 mb-4 rounded flex justify-between items-center">
              <span className="text-xl font-bold">Pilar</span>
              <span className="text-xl">→</span>
              <span className="text-xl font-bold">Cangulo</span>
            </div>
            
            {/* Schedule */}
            <div className="bg-gray-100 p-6 rounded">
              <div className="grid grid-cols-4 gap-4 text-lg font-semibold text-slate-700">
                <div>•05:00</div>
                <div>•06:00</div>
                <div>•07:00</div>
                <div>•08:00</div>
                <div>•09:10</div>
                <div>•10:20</div>
                <div>•11:30</div>
                <div>•12:40</div>
                <div>•13:40</div>
                <div>•14:50</div>
                <div>•16:00</div>
                <div>•17:00</div>
                <div>•18:00</div>
                <div>•19:10</div>
                <div>•20:20</div>
                <div>•21:30</div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-4">
              Horários sujeitos a alterações
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={downloadImage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200"
          >
            Baixar Imagem do Quadro
          </button>
        </div>
        
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  )
}