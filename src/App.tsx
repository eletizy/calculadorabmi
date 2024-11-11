import React, { useState } from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { InfoPanel } from './components/InfoPanel';
import { HowToUse } from './components/HowToUse';
import { FAQ } from './components/FAQ';
import { AffiliateBanner } from './components/AffiliateBanner';
import { HealthRecommendations } from './components/HealthRecommendations';

function App() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const showAffiliates = false; // Toggle this to true to show affiliate banners

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Bajo peso', color: 'text-blue-600' };
    if (bmi < 24.9) return { category: 'Peso normal', color: 'text-green-600' };
    if (bmi < 29.9) return { category: 'Sobrepeso', color: 'text-yellow-600' };
    return { category: 'Obesidad', color: 'text-red-600' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header />
        
        {showAffiliates && <AffiliateBanner variant="secondary" />}
        
        <div className="grid md:grid-cols-2 gap-8">
          <Calculator
            height={height}
            weight={weight}
            bmi={bmi}
            setHeight={setHeight}
            setWeight={setWeight}
            calculateBMI={calculateBMI}
            getBMICategory={getBMICategory}
          />
          <InfoPanel />
        </div>

        {bmi && (
          <HealthRecommendations
            height={height}
            weight={weight}
            bmi={bmi}
          />
        )}

        <HowToUse />
        <FAQ />
        
        {showAffiliates && <AffiliateBanner />}

        <footer className="text-center text-gray-500 text-sm">
          <p>Nota: El IMC es un indicador general y puede no ser preciso para atletas, ancianos o mujeres embarazadas.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;