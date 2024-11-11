import React from 'react';
import { Scale } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Scale className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">Calculadora de BMI</h1>
      </div>
      <p className="text-gray-600">Calcula tu Índice de Masa Corporal para verificar si tienes un peso saludable</p>
    </div>
  );
}