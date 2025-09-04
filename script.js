/* ====== Estilo geral ====== */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #0d0d0d;
  color: white;
  overflow-x: hidden;
}

/* ====== Partículas de fundo ====== */
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* ====== Seções ====== */
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  text-align: center;
  transition: all 0.6s ease-in-out;
}

h1, h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  animation: fadeInUp 2s ease-in-out;
}

/* ====== Botões ====== */
button, a.btn {
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  border: none;
  padding: 12px 25px;
  color: white;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

button:hover, a.btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #2575fc;
}

/* ====== Ícones ====== */
.icons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.icons a {
  font-size: 2rem;
  color: white;
  transition: transform 0.3s, color 0.3s;
}

.icons a:hover {
  color: #2575fc;
  transform: scale(1.2);
}

/* ====== Animações ====== */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
