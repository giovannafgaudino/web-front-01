import HumanizaLogo from "../SVGs/HumanizaLogo.svg"
function ContactForm() {
  return (
    <main className="Contato">
      <section className="humaniza-title">
        {/* <img src={HumanizaSVG} alt="Logo Humaniza ICR" className=""/> */}
        <img src={HumanizaLogo} alt="Logo Humaniza ICR" className="" />
        <div>
          <h1>HUMANIZA ICR</h1>
          <p > Instituto da Criança e do Adolescente | HC FMUSP</p>
        </div>
      </section>
      <section className="contactArea">

        
        <div>
          <div className="card">
            <div class="card-body">
              <h5 class="card-title">Localização</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.431646292815!2d-46.672815!3d-23.5555857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-PT!2sbr!4v1712361213929!5m2!1spt-PT!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p class="card-text">
                <a href="https://maps.app.goo.gl/K6RubGJ7UCqn9it48" class="card-link">Av. Dr. Enéas Carvakho de Aguiar, 647 - Cerqueira César, Sâo Paulo</a>
              </p>
              <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=3705599&language=pt&region=BR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" frameborder="0" ></iframe>
            </div>
          </div>
        </div>
        <div id="contact">

          <div className="form-contact">
            <h2>Entre em Contato</h2>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <input type="number" name="telefone" placeholder="Telefone" id="" />
              <textarea placeholder="Mensagem" />
              <button type="submit">Enviar</button>
            </form>
          </div>
          {/* <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=3705599&language=pt&region=BR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" frameborder="0" ></iframe> */}
        </div>
        <div className="telefones">
        <div className="card">
              <div class="card-body">
                <h5 class="card-title">Telefone</h5>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14629.431646292815!2d-46.672815!3d-23.5555857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-PT!2sbr!4v1712361213929!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <p class="card-text">(11) 2661-8500</p>
              </div>

            </div>
            <div className="card">
              <div class="card-body">
                <h5 class="card-title">Horários</h5>
                <p class="card-text text-dark p-0 m-0">Marcação de Consultas</p>
                <p class="card-text text-muted p-0 m-0">Segunda-feira à Sexta-feira</p>
                <p class="card-text p-0 m-0">ICr - (11) 2661-8535, das 7:00 às 16:00</p>
                <p class="card-text">ITACI - (11) 2661-8962 ou (11)2661-8963, das 14:00 às 16:00</p>
                <p class="card-text text-dark p-0 m-0">Agendamento de Exames</p>
                <p class="card-text text-muted p-0 m-0">Segunda-feira à Sexta-feira, das 11:00 às 15:00</p>
                <p class="card-text p-0 m-0">(11) 2661-8548</p>
                <p class="card-text p-0 m-0">(11) 2661-8670</p>
                <p class="card-text p-0 m-0">Pessoalmente no 2º andar do ICr</p>

              </div>

            </div>
          {/* <div>
            Texto sobre o projeto
          </div> */}
        </div>
      </section>
    </main>

  );
}

export default ContactForm;