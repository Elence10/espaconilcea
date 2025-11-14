import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    horario: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá! Gostaria de confirmar meu agendamento:

👤 Nome: ${formData.nome}
📞 Telefone: ${formData.telefone}
💅 Serviço: ${formData.servico}
📅 Data: ${formData.data}
🕐 Horário: ${formData.horario}`;

    const whatsappUrl = `https://wa.me/5521984025273?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#E8D4E8]">
      <header className="bg-[#4A1A4A] text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Espaço Nilcea Lima</h1>
        <button className="bg-[#B4A0B4] hover:bg-[#9B879B] text-white px-6 py-2 rounded-full font-medium transition">
          Agendar agora
        </button>
      </header>

      <section className="py-16 px-8 text-center">
        <h2 className="text-5xl font-bold text-[#4A1A4A] mb-6">
          Beleza e Bem-Estar em Um Só Lugar
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Tratamentos especializados com profissionais qualificados para realçar sua beleza natural
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white rounded-full px-6 py-3 shadow-md">
            ✨ Profissionais Experientes
          </div>
          <div className="bg-white rounded-full px-6 py-3 shadow-md">
            💅 Unhas Especiais
          </div>
          <div className="bg-white rounded-full px-6 py-3 shadow-md">
            🧖 Massagens Relaxantes
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full px-6 py-3 shadow-md">
            💆 Tratamentos Capilares
          </div>
        </div>

        <button className="bg-[#4A1A4A] hover:bg-[#3A0A3A] text-white px-10 py-4 rounded-full text-lg font-semibold transition">
          Ver Serviços e Agendar
        </button>
      </section>

      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-5xl font-bold text-[#4A1A4A] text-center mb-12">
          Nossos Serviços
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-[#4A1A4A] mb-6">💅 Unhas</h3>
            <hr className="border-[#B4A0B4] mb-6" />

            <div className="space-y-3">
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Manicure e Pedicure</span>
                <span className="font-semibold">A partir de R$40,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>SPA dos Pés</span>
                <span className="font-semibold">R$30,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Plástica dos Pés</span>
                <span className="font-semibold">R$80,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Fibra de Vidro</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Acrigel</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Gel na Tip</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Banho de Gel</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Gel Moldando</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Mold F1</span>
                <span className="font-semibold">A combinar</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-[#4A1A4A] mb-6">💆 Cabelos</h3>
            <hr className="border-[#B4A0B4] mb-6" />

            <div className="space-y-3">
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Corte Masculino</span>
                <span className="font-semibold">R$40</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Corte Feminino</span>
                <span className="font-semibold">R$80</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Aplicação de Produtos</span>
                <span className="font-semibold">R$100</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Coloração</span>
                <span className="font-semibold">A partir de R$100</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Correção de Cor</span>
                <span className="font-semibold">A partir de R$100</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Luzes</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Relaxamento Capilar</span>
                <span className="font-semibold">R$120</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Alinhamento Térmico</span>
                <span className="font-semibold">A partir de R$100</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Escova Comum</span>
                <span className="font-semibold">A partir de R$60</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Tratamentos Capilar</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Tranças</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Mega Hair</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Alongamentos</span>
                <span className="font-semibold">A partir de R$50</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-[#4A1A4A] mb-6">✨ Estética</h3>
            <hr className="border-[#B4A0B4] mb-6" />

            <div className="space-y-3">
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Depilação em Geral</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Estética Facial</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Estética Corporal</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Extensão de Cílios</span>
                <span className="font-semibold">A partir de R$70,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Design de Sobrancelha</span>
                <span className="font-semibold">R$35,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Sobrancelha de Henna</span>
                <span className="font-semibold">R$46,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Coloração de Sobrancelhas</span>
                <span className="font-semibold">R$65,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Micropigmentação de Sobrancelhas</span>
                <span className="font-semibold">R$350,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Micropigmentação Labial</span>
                <span className="font-semibold">R$250,00</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Brow Lamination</span>
                <span className="font-semibold">R$200,00</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-[#4A1A4A] mb-6">🧖 Massagens</h3>
            <hr className="border-[#B4A0B4] mb-6" />

            <div className="space-y-3">
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Massagem Modeladora</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Massagem Relaxante</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Detox Corporal</span>
                <span className="font-semibold">A combinar</span>
              </div>
              <div className="bg-[#E8D4E8] rounded-lg px-6 py-4 flex justify-between items-center">
                <span>Drenagem Linfática</span>
                <span className="font-semibold">A combinar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#E8D4E8]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-[#4A1A4A] text-center mb-8">
            Agende seu Horário
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-lg font-semibold text-[#4A1A4A] mb-2">
                👤 Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#B4A0B4] rounded-lg focus:outline-none focus:border-[#4A1A4A] transition"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-lg font-semibold text-[#4A1A4A] mb-2">
                📞 Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(21) 99999-9999"
                className="w-full px-4 py-3 border-2 border-[#B4A0B4] rounded-lg focus:outline-none focus:border-[#4A1A4A] transition"
              />
            </div>

            <div>
              <label htmlFor="servico" className="block text-lg font-semibold text-[#4A1A4A] mb-2">
                💅 Serviço Desejado
              </label>
              <select
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#B4A0B4] rounded-lg focus:outline-none focus:border-[#4A1A4A] transition"
              >
                <option value="">Selecione um serviço</option>
                <optgroup label="💅 Unhas">
                  <option value="Manicure e Pedicure">Manicure e Pedicure</option>
                  <option value="SPA dos Pés">SPA dos Pés</option>
                  <option value="Plástica dos Pés">Plástica dos Pés</option>
                  <option value="Fibra de Vidro">Fibra de Vidro</option>
                  <option value="Acrigel">Acrigel</option>
                  <option value="Gel na Tip">Gel na Tip</option>
                  <option value="Banho de Gel">Banho de Gel</option>
                  <option value="Gel Moldando">Gel Moldando</option>
                  <option value="Mold F1">Mold F1</option>
                </optgroup>
                <optgroup label="💆 Cabelos">
                  <option value="Corte Masculino">Corte Masculino</option>
                  <option value="Corte Feminino">Corte Feminino</option>
                  <option value="Aplicação de Produtos">Aplicação de Produtos</option>
                  <option value="Coloração">Coloração</option>
                  <option value="Correção de Cor">Correção de Cor</option>
                  <option value="Luzes">Luzes</option>
                  <option value="Relaxamento Capilar">Relaxamento Capilar</option>
                  <option value="Alinhamento Térmico">Alinhamento Térmico</option>
                  <option value="Escova Comum">Escova Comum</option>
                  <option value="Tratamentos Capilar">Tratamentos Capilar</option>
                  <option value="Tranças">Tranças</option>
                  <option value="Mega Hair">Mega Hair</option>
                  <option value="Alongamentos">Alongamentos</option>
                </optgroup>
                <optgroup label="✨ Estética">
                  <option value="Depilação em Geral">Depilação em Geral</option>
                  <option value="Estética Facial">Estética Facial</option>
                  <option value="Estética Corporal">Estética Corporal</option>
                  <option value="Extensão de Cílios">Extensão de Cílios</option>
                  <option value="Design de Sobrancelha">Design de Sobrancelha</option>
                  <option value="Sobrancelha de Henna">Sobrancelha de Henna</option>
                  <option value="Coloração de Sobrancelhas">Coloração de Sobrancelhas</option>
                  <option value="Micropigmentação de Sobrancelhas">Micropigmentação de Sobrancelhas</option>
                  <option value="Micropigmentação Labial">Micropigmentação Labial</option>
                  <option value="Brow Lamination">Brow Lamination</option>
                </optgroup>
                <optgroup label="🧖 Massagens">
                  <option value="Massagem Modeladora">Massagem Modeladora</option>
                  <option value="Massagem Relaxante">Massagem Relaxante</option>
                  <option value="Detox Corporal">Detox Corporal</option>
                  <option value="Drenagem Linfática">Drenagem Linfática</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="data" className="block text-lg font-semibold text-[#4A1A4A] mb-2">
                📅 Data
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#B4A0B4] rounded-lg focus:outline-none focus:border-[#4A1A4A] transition"
              />
            </div>

            <div>
              <label htmlFor="horario" className="block text-lg font-semibold text-[#4A1A4A] mb-2">
                🕐 Horário
              </label>
              <input
                type="time"
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-[#B4A0B4] rounded-lg focus:outline-none focus:border-[#4A1A4A] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A1A4A] hover:bg-[#3A0A3A] text-white py-4 rounded-lg text-lg font-bold transition flex items-center justify-center gap-2"
            >
              Confirmar no WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#4A1A4A] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8 border-b border-[#B4A0B4] pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">📍 Endereço</h3>
            <a
              href="https://maps.google.com/?q=Estrada+do+Camorim+600+Jacarepaguá"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B4A0B4] transition"
            >
              <p>Estrada do Camorim 600</p>
              <p>Rio Centro / Camorim Jacarepaguá</p>
              <p>(Rua do supermercado Unidos)</p>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">📞 Contato</h3>
            <p className="mb-2">
              <a href="tel:+552124209611" className="hover:text-[#B4A0B4] transition">
                Telefone: (21) 2420-9611
              </a>
            </p>
            <p className="mb-2">
              <a href="https://wa.me/5521984025273" target="_blank" rel="noopener noreferrer" className="hover:text-[#B4A0B4] transition">
                WhatsApp: (21) 98402-5273
              </a>
            </p>
            <p>
              <a href="https://instagram.com/espaconilcealima" target="_blank" rel="noopener noreferrer" className="hover:text-[#B4A0B4] transition">
                Instagram: @espaconilcealima
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">🕐 Horário de Funcionamento</h3>
            <p>Segunda a Sábado</p>
            <p>9h às 20h</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-[#B4A0B4]">© 2025 Espaço Nilcea Lima. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
