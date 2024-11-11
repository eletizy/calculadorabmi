import React from 'react';
import { Flame, Scale, Target } from 'lucide-react';

interface HealthRecommendationsProps {
  height: string;
  weight: string;
  bmi: number | null;
}

export function HealthRecommendations({ height, weight, bmi }: HealthRecommendationsProps) {
  const calculateIdealWeightRange = (heightCm: number) => {
    const minWeight = (18.5 * (heightCm / 100) * (heightCm / 100)).toFixed(1);
    const maxWeight = (24.9 * (heightCm / 100) * (heightCm / 100)).toFixed(1);
    return { minWeight, maxWeight };
  };

  const calculateDailyCalories = (weightKg: number, heightCm: number) => {
    const age = 30;
    const activityFactor = 1.375;
    
    const maleCalories = ((10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5) * activityFactor;
    const femaleCalories = ((10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161) * activityFactor;
    
    return {
      male: Math.round(maleCalories),
      female: Math.round(femaleCalories)
    };
  };

  if (!height || !weight || !bmi) return null;

  const heightNum = parseFloat(height);
  const weightNum = parseFloat(weight);
  const { minWeight, maxWeight } = calculateIdealWeightRange(heightNum);
  const calories = calculateDailyCalories(weightNum, heightNum);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Tus Indicadores de Salud</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Rango de Peso Ideal</h3>
              <p className="text-gray-600">
                Para tu altura ({height} cm), un rango de peso saludable es:
              </p>
              <p className="text-lg font-semibold text-indigo-600">
                {minWeight} - {maxWeight} kg
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Estado Actual</h3>
              <p className="text-gray-600">
                Tu peso actual ({weight} kg) está
                {weightNum > parseFloat(maxWeight)
                  ? ' por encima'
                  : weightNum < parseFloat(minWeight)
                  ? ' por debajo'
                  : ' dentro'} del rango recomendado.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Flame className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Calorías Diarias Estimadas</h3>
              <p className="text-gray-600">Para mantener tu peso actual:</p>
              <div className="space-y-1 mt-2">
                <p className="text-sm">
                  <span className="font-medium">Hombres:</span>{' '}
                  <span className="text-indigo-600 font-semibold">{calories.male} calorías/día</span>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Mujeres:</span>{' '}
                  <span className="text-indigo-600 font-semibold">{calories.female} calorías/día</span>
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Basado en nivel de actividad moderado. Ajusta ±500 calorías para pérdida/ganancia de peso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}