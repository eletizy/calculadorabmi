import React from 'react';

export function HowToUse() {
  const steps = [
    "Ingresa tu altura en centímetros (cm)",
    "Ingresa tu peso en kilogramos (kg)",
    "Haz clic en el botón 'Calcular BMI'",
    "Visualiza tu resultado de BMI y categoría",
    "Consulta la tabla de categorías de BMI como referencia"
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cómo Usar</h2>
      <ol className="list-decimal list-inside space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-600">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}