import React from 'react';
import { Activity, Heart, Info } from 'lucide-react';

const healthTips = [
  { icon: <Activity className="w-5 h-5" />, text: 'El ejercicio regular mejora la salud' },
  { icon: <Heart className="w-5 h-5" />, text: 'Mantén una dieta equilibrada' },
  { icon: <Info className="w-5 h-5" />, text: 'El BMI es solo un indicador de salud' }
];

export function InfoPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorías de BMI</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Bajo peso</span>
            <span className="text-blue-600 font-medium">&lt; 18.5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Peso normal</span>
            <span className="text-green-600 font-medium">18.5 - 24.9</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sobrepeso</span>
            <span className="text-yellow-600 font-medium">25 - 29.9</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Obesidad</span>
            <span className="text-red-600 font-medium">&gt; 30</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Consejos de Salud</h2>
        <div className="space-y-4">
          {healthTips.map((tip, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-600">
              <div className="text-indigo-600">{tip.icon}</div>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}