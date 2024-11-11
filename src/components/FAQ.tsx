import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "¿Qué es el BMI?",
      answer: "El BMI (Índice de Masa Corporal) es una medida simple que utiliza tu altura y peso para determinar si tu peso es saludable."
    },
    {
      question: "¿Qué tan preciso es el BMI?",
      answer: "El BMI es un buen indicador general pero tiene limitaciones. Puede no ser preciso para atletas, personas mayores o mujeres embarazadas, ya que no distingue entre el peso del músculo y el peso de la grasa."
    },
    {
      question: "¿Por qué usar kilogramos y centímetros?",
      answer: "Utilizamos el sistema métrico ya que es el estándar internacional y proporciona cálculos más precisos. Como referencia, 1 pulgada = 2.54 cm y 1 libra = 0.45 kg."
    },
    {
      question: "¿Con qué frecuencia debo revisar mi BMI?",
      answer: "Se recomienda revisar tu BMI cada pocos meses, o cuando notes cambios significativos en tu peso o composición corporal."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-medium text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}