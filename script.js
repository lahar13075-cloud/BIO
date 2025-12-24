document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 BIOLOGY QUESTIONS ----------
const questions = [
  { q:"The nose of the redesigned Shinkansen bullet train is inspired by?", opts:["Owl peak","Kingfisher beak","Crane peak","Herons peak"], answer:"B" },
  { q:"Passive cooling in skyscrapers is inspired by?", opts:["Ant mounds","Earth mounds","Termite mounds","Spiro mounds"], answer:"C" },
  { q:"Belt movement of military tanks was inspired by?", opts:["Butterfly movement","Caterpillar movement","Ant movement","Termite movement"], answer:"B" },
  { q:"Retinal prosthetic developed by scientists is approved by?", opts:["USEPA","CPCB","USFDA","SPCB"], answer:"C" },
  { q:"Gene used to develop genetically modified corn is from?", opts:["Bacillus cereus","Bacillus thuringiensis","Bacillus anthracis","Bacillus subtilis"], answer:"B" },

  { q:"Protein produced by Bacillus thuringiensis with insecticidal property is?", opts:["Try protein","Res protein","Cry protein","Taf protein"], answer:"C" },
  { q:"Biofertilizers help to?", opts:["Reduce soil fertility","Replace chemical nitrogen and phosphorus","Reduce crop yield","Destimulate plant growth"], answer:"B" },
  { q:"Microstructure analysis of self-healing concrete is done using?", opts:["XRD","SEM","FTIR","XPS"], answer:"B" },
  { q:"Pollution control technique using bioreactor with living material is?", opts:["Bioleaching","Bioaugmentation","Biofiltration","Biomimetics"], answer:"C" },
  { q:"Nanoparticle size ranges between?", opts:["1–10 µm","1–100 nm","1–100 mm","1–1000 nm"], answer:"B" },

  { q:"Prokaryotic cell size ranges from?", opts:["10–50 μm","0.1–5.0 μm","2–10 μm","0.1–50 μm"], answer:"B" },
  { q:"Cells without true nucleus are?", opts:["Eukaryotic cells","Plant cells","Prokaryotic cells","Animal cells"], answer:"C" },
  { q:"Histone protein is present in?", opts:["Plasmids","Viruses","Eukaryotic chromosomes","Prokaryotic chromosomes"], answer:"C" },
  { q:"Asexual reproduction in prokaryotes occurs by?", opts:["Conjugation","Binary fission","Ligation","Mitosis"], answer:"B" },
  { q:"Protein synthesis occurs in?", opts:["Mitochondria","Ribosomes","Lysosomes","Vacuoles"], answer:"B" },

  { q:"Virus can be observed using?", opts:["Light microscope","Electron microscope","Fluorescent microscope","Naked eye"], answer:"B" },
  { q:"Cell wall of bacteria is made of?", opts:["Cellulose","Peptidoglycan","Protein","Chitin"], answer:"B" },
  { q:"Gram positive bacteria appear ___ after gram staining?", opts:["Red","Pink","Purple","Brown"], answer:"C" },
  { q:"Black bread mold is?", opts:["Mucor","Aspergillus niger","Rhizopus stolonifer","Candida albicans"], answer:"C" },
  { q:"Greek word ‘Eu’ means?", opts:["Large","Well","Round","Embryo"], answer:"B" },

  { q:"Cell membrane is also called?", opts:["Cell wall","Plasma membrane","Nuclear membrane","Plasmalemma"], answer:"B" },
  { q:"Energy currency of the cell is?", opts:["AMP","ATP","ADP","Adenosine"], answer:"B" },
  { q:"Suicide bags of the cell are?", opts:["Centrioles","Vacuoles","Lysosomes","Centromeres"], answer:"C" },
  { q:"Which is NOT a biomolecule?", opts:["Lipids","Carbohydrates","Calcium sulphate","Nucleic acids"], answer:"C" },
  { q:"Fatty acids without double bonds are?", opts:["Trans","Unsaturated","Saturated","Cis"], answer:"C" },

  { q:"Starch is a?", opts:["Monosaccharide","Disaccharide","Polysaccharide","Oligosaccharide"], answer:"C" },
  { q:"Peptide bond joins?", opts:["Sugars","Amino acids","Fatty acids","Nucleotides"], answer:"B" },
  { q:"Alpha helix and beta sheet are?", opts:["Primary","Secondary protein structures","Tertiary","Quaternary"], answer:"B" },
  { q:"Antibodies are?", opts:["Lipids","Proteins","Carbohydrates","Fats"], answer:"B" },
  { q:"RNA synthesis from DNA is called?", opts:["Translation","Replication","Transcription","Transfusion"], answer:"C" },

  { q:"DNA strands are?", opts:["Parallel","Antiparallel","Horizontal","Oblique"], answer:"B" },
  { q:"Photosynthesis occurs in?", opts:["Mitochondria","Ribosome","Chloroplast","Nucleus"], answer:"C" },
  { q:"Calvin cycle occurs in?", opts:["Grana","Thylakoid","Stroma","Chlorophyll"], answer:"C" },
  { q:"ATP is a?", opts:["Protein","Nucleotide","Lipid","Carbohydrate"], answer:"B" },
  { q:"Aerobic respiration yields how many ATP?", opts:["18","22","38","2"], answer:"C" },

  { q:"Glycolysis produces?", opts:["CO₂","Oxygen","Pyruvate","Lactate"], answer:"C" },
  { q:"DNA replication enzyme is?", opts:["Ligase","Helicase","DNA polymerase","RNA polymerase"], answer:"C" },
  { q:"Interphase occurs during?", opts:["Cell growth","Cytokinesis","Chromatid separation","Spindle formation"], answer:"A" },
  { q:"Chromatids are joined by?", opts:["Spindle","Microtubules","Centromere","Cytoskeleton"], answer:"C" },
  { q:"Photosynthesis raw materials are?", opts:["Oxygen and water","CO₂ and water","Carbon monoxide","Hydrogen and oxygen"], answer:"B" },

  { q:"Biodegradable leather was developed in?", opts:["USA","Mexico","Canada","Brazil"], answer:"B" },
  { q:"Cactus leather is also known as?", opts:["Indian cactus","Prickly pear","Breathing leaf","Arborea"], answer:"B" },
  { q:"Biodegradable leather company is?", opts:["Arman","Lakhaani","Desserto","Exhale"], answer:"C" },
  { q:"Bionic chandelier was designed by?", opts:["Leonardo da Vinci","Julian Melchiorri","Igor Sikorsky","Shannon"], answer:"B" },
  { q:"Bionic chandelier purifies air using?", opts:["Filters","Fans","Photosynthetic algae","Carbon traps"], answer:"C" },

  { q:"Solar powered pest control was developed at?", opts:["IIT Madras","IIT Bombay","IIT Kharagpur","IIT Kanpur"], answer:"C" },
  { q:"BioDCM pesticide protects from?", opts:["Viral infection","Bacterial only","Bacterial & fungal infection","Fungal only"], answer:"C" },
  { q:"BioDCM is extracted from?", opts:["E. coli","Virus","Trichoderma asperellum","Bacillus anthracis"], answer:"C" },
  { q:"Continuous glucose monitoring device is?", opts:["Glucometer","CGM","Insulin pump","Pacemaker"], answer:"B" },
  { q:"Robotic surgery was first used in?", opts:["1995","1897","1987","2001"], answer:"C" },

  { q:"Pacemaker condition caused by blocked impulses is?", opts:["Arrhythmia","Heart attack","Heart block","Heart clog"], answer:"C" },
  { q:"Bionic eye stimulates?", opts:["Lens","Cornea","Optic nerve","Retina"], answer:"C" },
  { q:"Cochlear implant converts sound using?", opts:["Battery","Electrode","Sound processor","Amplifier"], answer:"C" }
];
let order = [];
let userAnswers = {};
let cur = 0;
let timerInterval = null;
let remainingSeconds = 0;
let animating = false;

const $ = id => document.getElementById(id);
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function pad(n){return n.toString().padStart(2,'0');}
function formatTime(s){return `${Math.floor(s/60)}:${pad(s%60)}`;}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

// THEME SWITCH
let light=false;
$("themeToggle").onclick=()=>{
  light=!light;
  if(light){
    document.body.style.background="#f4f4f4";
    document.body.style.color="#000";
    $("themeToggle").innerText="Dark Mode";
  } else {
    document.body.style.background="";
    document.body.style.color="";
    $("themeToggle").innerText="Light Mode";
  }
};

// START BUTTON
$("startBtn").onclick=()=>{
  const name = $("username").value.trim();
  if(!name){ alert("Enter name first"); return; }

  order = shuffle(Array.from(questions.keys()));
  $("totalCount").innerText = questions.length;

  $("startPage").style.display="none";
  $("quiz").style.display="block";

  remainingSeconds = 60 * 60;
  $("timerText").innerText = formatTime(remainingSeconds);

  timerInterval = setInterval(()=>{
    remainingSeconds--;
    if(remainingSeconds<=0){ clearInterval(timerInterval); submitTest(); }
    $("timerText").innerText = formatTime(remainingSeconds);
  },1000);

  renderStage();
  showQuestion(0);
};

// RENDER QUESTIONS
function renderStage(){
  const stage = $("qstage");
  stage.innerHTML="";

  questions.forEach((q,i)=>{
    const card = document.createElement("div");
    card.className="question-card";
    card.id="card"+i;
    card.style.display="none";

    let html = `<div class='qtext'><strong>Q${i+1}.</strong> ${q.q}</div><div class='options'>`;

    q.opts.forEach((o,j)=>{
      const letter = ["A","B","C","D"][j];
      html += `
        <label class="option">
          <input type="radio" name="q${i}" value="${letter}">
          <strong>${letter}.</strong> ${o}
        </label>`;
    });

    html += "</div>";
    card.innerHTML = html;
    stage.appendChild(card);
  });
}

// SHOW QUESTION
function showQuestion(pos){
  document.querySelectorAll(".question-card").forEach(c=>c.style.display="none");
  const card = $("card"+order[pos]);
  card.style.display="block";

  cur = pos;
  $("progressText").innerText = `Question ${cur+1} / ${questions.length}`;
 $("progressBar").style.width = ((cur + 1) / questions.length) * 100 + "%";
  $("prevBtn").style.display = cur>0 ? "inline-block" : "none";
  $("nextBtn").innerText = cur<questions.length-1 ? "Next" : "Submit";
}

$("nextBtn").onclick=()=>{
  saveCurrent();
  if(cur<questions.length-1) showQuestion(cur+1);
  else submitTest();
};

$("prevBtn").onclick=()=>{
  saveCurrent();
  showQuestion(cur-1);
};

function saveCurrent(){
  const sel = document.querySelector(`input[name="q${order[cur]}"]:checked`);
  if(sel) userAnswers[order[cur]] = sel.value;
  $("answeredCount").innerText = Object.keys(userAnswers).length;
}

// SUBMIT TEST
function submitTest(){
  if(timerInterval) clearInterval(timerInterval);
  saveCurrent();

  let score = 0;
  let wrongCount = 0;

  for(let i=0;i<questions.length;i++){
    if(userAnswers[i] === questions[i].answer){
      score++;
    } else {
      wrongCount++;
    }
  }

  $('qstage').style.display='none';
  document.querySelector('.controls').style.display='none';
  $('result').style.display='block';
  $('timerText').style.display='none';
  document.querySelector('.progress-wrap').style.display='none';

  const name = $('username').value.trim() || 'User';

  $('result').innerHTML = `
    <div style="font-size:22px;font-weight:700;margin-bottom:12px">
      ${capitalize(name)}, your score is ${score}/${questions.length}
    </div>
  `;

  if(wrongCount > 0){
    const btn = document.createElement('button');
    btn.className = 'btn ripple';
    btn.style.marginTop = '12px';
    btn.innerText = 'Check Answers';
    btn.onclick = showAnswerPopup;
    $('result').appendChild(btn);
  }
}
function showAnswerPopup(){
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  const box = document.createElement('div');
  box.style.background = 'var(--card)';
  box.style.color = 'var(--text)';
  box.style.padding = '20px';
  box.style.borderRadius = '16px';
  box.style.width = '90%';
  box.style.maxWidth = '600px';
  box.style.maxHeight = '80vh';
  box.style.overflowY = 'auto';

  box.innerHTML = `<h3 style="margin-bottom:10px">Answer Review</h3>`;

  questions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const correct = q.answer;

    const row = document.createElement('div');
    row.style.padding = '8px';
    row.style.borderBottom = '1px solid rgba(255,255,255,0.06)';

    if(!userAns){
      row.innerHTML = `Q${i+1} ⚠ Not Answered — <strong>Correct:</strong> ${correct}`;
    }
    else if(userAns === correct){
      row.innerHTML = `Q${i+1} ✔ Correct`;
      row.style.color = '#39ff14';
    }
    else{
      row.innerHTML = `Q${i+1} ❌ Wrong — <strong>Correct:</strong> ${correct}`;
      row.style.color = '#ff5c5c';
    }

    box.appendChild(row);
  });

  const close = document.createElement('button');
  close.className = 'btn';
  close.style.marginTop = '14px';
  close.innerText = 'Close';
  close.onclick = () => overlay.remove();

  box.appendChild(close);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}
  });
