import React from 'react'
import { Recycle, Trash2, Smartphone, ArrowRight, Phone, Mail } from 'lucide-react';
import './InformationPage.css'

function InformationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-700">
      {/* Hero Section */}
      <header className="pt-12 pb-24 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Trash and Recycling Information</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Learn about proper waste management and recycling practices to help protect our environment
        </p>
      </header>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 px-4 -mt-8">
        <a href="#types" className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg hover:bg-white transition-colors">
          <h3 className="text-green-700 font-semibold text-lg">Types of Trash</h3>
        </a>
        <a href="#recycling" className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg hover:bg-white transition-colors">
          <h3 className="text-green-700 font-semibold text-lg">How Trash is Recycled</h3>
        </a>
        <a href="#contact" className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg hover:bg-white transition-colors">
          <h3 className="text-green-700 font-semibold text-lg">Contact Us</h3>
        </a>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Types of Trash Section */}
        <section id="types" className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center gap-3">
            <Trash2 className="h-8 w-8" />
            Types of Trash
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Recycle className="h-5 w-5" />
                Recyclable Trash
              </h3>
              <p className="text-gray-700 text-lg">
                Recyclable trash includes materials that can be processed and used again. Common recyclable items are
                paper, cardboard, glass, and certain plastics.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Trash2 className="h-5 w-5" />
                Non-Recyclable Trash
              </h3>
              <p className="text-gray-700 text-lg">
                Non-recyclable trash includes materials that cannot be recycled due to contamination or lack of processing
                facilities. Examples are certain plastics, polystyrene, and certain types of packaging.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Electronic Waste
              </h3>
              <p className="text-gray-700 text-lg">
                Electronic waste, or e-waste, includes discarded electronic devices such as computers, smartphones, and
                appliances. E-waste often contains hazardous materials that require special handling.
              </p>
            </div>
          </div>
        </section>

        {/* Recycling Process Section */}
        <section id="recycling" className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center gap-3">
            <Recycle className="h-8 w-8" />
            How Trash is Recycled
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 mb-6">
              The recycling process involves several steps to ensure materials are properly processed and reused. 
              Here's a brief overview:
            </p>

            <div className="space-y-4">
              {['Collection', 'Sorting', 'Processing', 'Manufacturing', 'Distribution'].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-green-600" />
                  <p className="text-lg">
                    <span className="font-semibold text-green-700">{step}:</span>
                    {index === 0 && ' Recyclable materials are collected from homes, businesses, and recycling centers'}
                    {index === 1 && ' Materials are sorted by type and cleaned'}
                    {index === 2 && ' Items are processed into raw materials'}
                    {index === 3 && ' Raw materials are used to create new products'}
                    {index === 4 && ' New products are distributed to stores'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-green-600" />
              <p className="text-lg">Call us: (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-600" />
              <p className="text-lg">Email: recycling@example.com</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
export default InformationPage