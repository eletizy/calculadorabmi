import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AffiliateBannerProps {
  variant?: 'primary' | 'secondary';
}

export function AffiliateBanner({ variant = 'primary' }: AffiliateBannerProps) {
  if (variant === 'secondary') {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-24 translate-x-24" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium text-purple-200">OFERTA POR TIEMPO LIMITADO</span>
          </div>
          
          <h2 className="text-xl font-bold mb-3">Comienza Tu Viaje de Pérdida de Peso Hoy</h2>
          <p className="text-purple-100 text-sm mb-4">
            Únete a miles que ya han transformado sus vidas con nuestro programa probado.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Empezar Ahora <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium text-indigo-200">OFERTA ESPECIAL</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">¿Listo para Transformar tu Vida?</h2>
        <p className="text-indigo-100 mb-6">
          Descubre nuestro programa de control de peso científicamente probado que ha ayudado a miles a alcanzar sus objetivos de salud.
        </p>
        
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saber Más <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}