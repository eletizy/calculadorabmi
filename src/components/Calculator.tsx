import React from 'react';

interface CalculatorProps {
  height: string;
  weight: string;
  bmi: number | null;
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
  calculateBMI: () => void;
  getBMICategory: (bmi: number) => { category: string; color: string };
}

export function Calculator({
  height,
  weight,
  bmi,
  setHeight,
  setWeight,
  calculateBMI,
  getBMICategory,
}: CalculatorProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ingresa tu altura"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ingresa tu peso"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Calcular BMI
        </button>
      </div>

      {bmi && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">Tu IBM:</p>
          <p className="text-3xl font-bold text-indigo-600">{bmi}</p>
          <p className={`text-lg font-medium ${getBMICategory(bmi).color}`}>
            {getBMICategory(bmi).category}
          </p>
        </div>
      )}
    </div>
  );
}