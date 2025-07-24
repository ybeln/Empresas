const cursos = [
  { id: "conta1", nombre: "Fundamentos de contabilidad y finanzas", creditos: 4, prerrequisitos: [], tipo: "obligatorio" },
  { id: "admin1", nombre: "Introducción a la administración", creditos: 3, prerrequisitos: [], tipo: "obligatorio" },
  { id: "mate1", nombre: "Matemática para los negocios 1", creditos: 3, prerrequisitos: [], tipo: "obligatorio" },
  { id: "red1", nombre: "Comprensión y Redacción de Textos 1", creditos: 4, prerrequisitos: [], tipo: "obligatorio" },
  { id: "peru", nombre: "Problemas y desafíos en el Perú actual", creditos: 3, prerrequisitos: [], tipo: "obligatorio" },
  { id: "vida", nombre: "Introducción a la vida universitaria", creditos: 2, prerrequisitos: [], tipo: "obligatorio" },
  { id: "gestion", nombre: "Gestión General", creditos: 4, prerrequisitos: ["admin1"], tipo: "obligatorio" },
  { id: "mate2", nombre: "Matemática para los negocios 2", creditos: 4, prerrequisitos: ["mate1"], tipo: "obligatorio" },
  { id: "ingles1", nombre: "Inglés 1", creditos: 3, prerrequisitos: [], tipo: "obligatorio" },
  { id: "red2", nombre: "Comprensión y Redacción de Textos 2", creditos: 4, prerrequisitos: ["red1"], tipo: "obligatorio" },
  { id: "contafin", nombre: "Contabilidad financiera", creditos: 2, prerrequisitos: ["conta1"], tipo: "obligatorio" },
  { id: "derecho", nombre: "Derecho Empresarial", creditos: 3, prerrequisitos: [], tipo: "obligatorio" },
  { id: "estadistica", nombre: "Estadística aplicada para los negocios", creditos: 4, prerrequisitos: ["mate2"], tipo: "obligatorio" },
  { id: "info", nombre: "Informática para los negocios", creditos: 5, prerrequisitos: [], tipo: "obligatorio" },
  { id: "ingles2", nombre: "Inglés 2", creditos: 3, prerrequisitos: ["ingles1"], tipo: "obligatorio" },
  { id: "individuo", nombre: "Individuo y medio ambiente", creditos: 2, prerrequisitos: [], tipo: "obligatorio" },
  { id: "costos", nombre: "Contabilidad gerencial y de costos", creditos: 5, prerrequisitos: ["contafin"], tipo: "obligatorio" },
  { id: "cultura", nombre: "Comportamiento y cultura en las organizaciones", creditos: 5, prerrequisitos: ["admin1"], tipo: "obligatorio" },
  { id: "micro", nombre: "Microeconomía y Macroeconomía", creditos: 3, prerrequisitos: ["gestion"], tipo: "obligatorio" },
  { id: "finanzas", nombre: "Finanzas aplicadas", creditos: 4, prerrequisitos: ["costos"], tipo: "obligatorio" },
  { id: "etica", nombre: "Ciudadanía y reflexión ética", creditos: 3, prerrequisitos: ["red1"], tipo: "obligatorio" },
  { id: "ingles3", nombre: "Inglés 3", creditos: 3, prerrequisitos: ["ingles2"], tipo: "obligatorio" },
  { id: "marketing", nombre: "Fundamentos de marketing", creditos: 3, prerrequisitos: ["gestion"], tipo: "obligatorio" },
  { id: "integrador1", nombre: "Curso integrador en administración y negocios", creditos: 5, prerrequisitos: ["micro", "estadistica", "finanzas", "marketing", "info"], tipo: "obligatorio" },
  { id: "investigacion", nombre: "Investigación académica", creditos: 4, prerrequisitos: ["individuo", "red1"], tipo: "obligatorio" },
  { id: "mercados", nombre: "Investigación de mercados", creditos: 5, prerrequisitos: ["marketing"], tipo: "obligatorio" },
  { id: "ingles4", nombre: "Inglés 4", creditos: 3, prerrequisitos: ["ingles3"], tipo: "obligatorio" },
  { id: "operativa", nombre: "Investigación Operativa", creditos: 5, prerrequisitos: ["estadistica"], tipo: "obligatorio" },
  { id: "ventas", nombre: "Gestión de ventas", creditos: 3, prerrequisitos: ["mercados"], tipo: "obligatorio" },
  { id: "negocios", nombre: "Negocios digitales", creditos: 3, prerrequisitos: ["marketing", "info"], tipo: "obligatorio" },
  { id: "innovacion", nombre: "Innovación y transformación empresarial", creditos: 3, prerrequisitos: ["integrador1"], tipo: "obligatorio" },
  { id: "habilidades", nombre: "Taller de habilidades gerenciales", creditos: 4, prerrequisitos: ["finanzas"], tipo: "obligatorio" },
  { id: "talento", nombre: "Gestión de talento humano", creditos: 4, prerrequisitos: ["cultura"], tipo: "obligatorio" },
  { id: "gerencia", nombre: "Gerencia de evaluación financiera", creditos: 3, prerrequisitos: ["cultura"], tipo: "obligatorio" },
  { id: "operaciones", nombre: "Administración de operaciones", creditos: 5, prerrequisitos: ["operativa"], tipo: "obligatorio" },
  { id: "estrategias", nombre: "Planificación y estrategias de acción", creditos: 5, prerrequisitos: ["operativa"], tipo: "obligatorio" },
  { id: "diseno", nombre: "Diseño organizacional", creditos: 3, prerrequisitos: ["gerencia"], tipo: "obligatorio" },
  { id: "presupuesto", nombre: "Formulación y evaluación presupuestal", creditos: 4, prerrequisitos: ["gerencia"], tipo: "obligatorio" },
  { id: "creatividad", nombre: "Creatividad empresarial", creditos: 3, prerrequisitos: [], tipo: "electivo" },
  { id: "business", nombre: "Elementary business english", creditos: 4, prerrequisitos: ["ingles4"], tipo: "electivo" },
  { id: "logistica", nombre: "Gerencia de servicios logísticos", creditos: 3, prerrequisitos: [], tipo: "electivo" },
  { id: "suministro", nombre: "Gestión y suministro de bienes y servicios", creditos: 4, prerrequisitos: ["operaciones"], tipo: "obligatorio" },
  { id: "analitica", nombre: "Analítica de datos", creditos: 4, prerrequisitos: ["mercados"], tipo: "obligatorio" },
  { id: "formacion", nombre: "Formación para la investigación - administración y negocios", creditos: 4, prerrequisitos: ["integrador1"], tipo: "obligatorio" },
  { id: "empleabilidad", nombre: "Formación para la empleabilidad", creditos: 3, prerrequisitos: ["integrador1"], tipo: "obligatorio" },
  { id: "direccion", nombre: "Dirección de personas", creditos: 5, prerrequisitos: ["talento"], tipo: "obligatorio" },
  { id: "integrador2", nombre: "Curso integrador en gestión estratégica de empresas", creditos: 4, prerrequisitos: ["integrador1", "presupuesto"], tipo: "obligatorio" },
  { id: "etica2", nombre: "Ética profesional y responsabilidad social", creditos: 3, prerrequisitos: ["cultura"], tipo: "obligatorio" },
  { id: "dircom", nombre: "Dirección comercial", creditos: 5, prerrequisitos: ["ventas"], tipo: "obligatorio" },
  { id: "negociacion", nombre: "Negociación y toma de decisiones", creditos: 5, prerrequisitos: ["diseno"], tipo: "obligatorio" },
  { id: "community", nombre: "Community manager", creditos: 3, prerrequisitos: [], tipo: "electivo" },
  { id: "herramientas", nombre: "Herramientas de desarrollo profesional - gestión", creditos: 4, prerrequisitos: ["integrador1"], tipo: "obligatorio" },
  { id: "dirfin", nombre: "Dirección financiera", creditos: 4, prerrequisitos: ["presupuesto"], tipo: "obligatorio" },
  { id: "taller", nombre: "Taller de investigación - administración de empresas", creditos: 4, prerrequisitos: ["formacion"], tipo: "obligatorio" },
  { id: "estrategica", nombre: "Dirección estratégica", creditos: 5, prerrequisitos: ["estrategias"], tipo: "obligatorio" },
  { id: "branding", nombre: "Branding", creditos: 3, prerrequisitos: [], tipo: "electivo" },
  { id: "liderazgo", nombre: "Liderazgo y conformación de equipos", creditos: 3, prerrequisitos: [], tipo: "electivo" }
];

const malla = document.getElementById("malla");
const aprobadosObligatorios = document.getElementById("aprobados-obligatorios");
const creditosObligatorios = document.getElementById("creditos-obligatorios");
const aprobadosElectivos = document.getElementById("aprobados-electivos");
const creditosElectivos = document.getElementById("creditos-electivos");

let estadoCursos = {};

function crearBoton(curso) {
  const btn = document.createElement("button");
  btn.className = "curso bloqueado";
  btn.innerText = curso.nombre + ` (${curso.creditos} cr)`;
  btn.dataset.id = curso.id;

  if (curso.prerrequisitos.length === 0) {
    btn.classList.remove("bloqueado");
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("bloqueado")) return;

    btn.classList.toggle("aprobado");
    const aprobado = btn.classList.contains("aprobado");
    estadoCursos[curso.id] = aprobado;
    actualizarBloqueos();
    actualizarContadores();
  });

  malla.appendChild(btn);
}

function actualizarBloqueos() {
  document.querySelectorAll(".curso").forEach(boton => {
    const id = boton.dataset.id;
    const curso = cursos.find(c => c.id === id);
    if (!curso) return;

    if (
      curso.prerrequisitos.length === 0 ||
      curso.prerrequisitos.every(pr => estadoCursos[pr])
    ) {
      if (!boton.classList.contains("aprobado")) {
        boton.classList.remove("bloqueado");
      }
    } else {
      if (!boton.classList.contains("aprobado")) {
        boton.classList.add("bloqueado");
      }
    }
  });
}

function actualizarContadores() {
  let obligatorios = 0;
  let creditosOb = 0;
  let electivos = 0;
  let creditosEl = 0;

  cursos.forEach(c => {
    if (estadoCursos[c.id]) {
      if (c.tipo === "obligatorio") {
        obligatorios++;
        creditosOb += c.creditos;
      } else {
        electivos++;
        creditosEl += c.creditos;
      }
    }
  });

  aprobadosObligatorios.innerText = obligatorios;
  creditosObligatorios.innerText = creditosOb;
  aprobadosElectivos.innerText = electivos;
  creditosElectivos.innerText = creditosEl;
}

cursos.forEach(curso => {
  estadoCursos[curso.id] = false;
  crearBoton(curso);
});

actualizarContadores();
