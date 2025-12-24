document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 BIOLOGY QUESTIONS ----------
const questions = [

  { q: "The nose of the redesigned Shinkansen bullet train is inspired by?", opts: ["Kingfisher beak","Crane peak","Owl peak","Herons peak"], answer: "A" },
  { q: "Passive cooling in skyscrapers is inspired by?", opts: ["Termite mounds","Earth mounds","Ant mounts","Spiro mounds"], answer: "A" },
  { q: "Belt movement of military tanks was inspired by?", opts: ["Caterpillar movement","Termite movement","Ant movement","Butterfly movement"], answer: "A" },
  { q: "Retinal prosthetic developed by scientists is approved by?", opts: ["USFDA","USEPA","CPCB","SPCB"], answer: "A" },
  { q: "Gene used to develop genetically modified corn is from?", opts: ["Bacillus thuringiensis","Bacillus cereus","Bacillus subtilis","Bacillus anthracis"], answer: "A" },

  { q: "Protein produced by Bacillus thuringiensis with insecticidal property is?", opts: ["Cry protein","Res protein","Try protein","Taf protein"], answer: "A" },
  { q: "Biofertilizers help to?", opts: ["Replace chemical nitrogen and phosphorus","Reduce crop yield","Reduce soil fertility","Destimulate plant growth"], answer: "A" },
  { q: "Microstructure analysis of self-healing concrete is done using?", opts: ["SEM","XRD","FTIR","XPS"], answer: "A" },
  { q: "Pollution control technique using bioreactor with living material is?", opts: ["Biofiltration","Bioaugmentation","Bioleaching","Biomimetics"], answer: "A" },
  { q: "Nanoparticle size ranges between?", opts: ["1–100 nm","1–100 mm","1–1000 nm","1–10 µm"], answer: "A" },

  { q: "Prokaryotic cell size ranges from?", opts: ["0.1–5.0 μm","0.1–50 μm","10–50 μm","2–10 μm"], answer: "A" },
  { q: "Cells without true nucleus are?", opts: ["Prokaryotic cells","Eukaryotic cells","Plant cells","Animal cells"], answer: "A" },
  { q: "Histone protein is present in?", opts: ["Eukaryotic chromosomes","Prokaryotic chromosomes","Plasmids","Viruses"], answer: "A" },
  { q: "Asexual reproduction in prokaryotes occurs by?", opts: ["Binary fission","Conjugation","Mitosis","Ligation"], answer: "A" },
  { q: "Protein synthesis occurs in?", opts: ["Ribosomes","Lysosomes","Mitochondria","Vacuoles"], answer: "A" },

  { q: "Virus can be observed using?", opts: ["Electron microscope","Light microscope","Naked eye","Fluorescent microscope"], answer: "A" },
  { q: "Cell wall of bacteria is made of?", opts: ["Peptidoglycan","Cellulose","Protein","Chitin"], answer: "A" },
  { q: "Gram positive bacteria appear ___ after gram staining?", opts: ["Purple","Pink","Red","Brown"], answer: "A" },
  { q: "Black bread mold is?", opts: ["Rhizopus stolonifer","Aspergillus niger","Candida albicans","Mucor"], answer: "A" },
  { q: "Greek word ‘Eu’ means?", opts: ["Well","Large","Round","Embryo"], answer: "A" },

  { q: "Cell membrane is also called?", opts: ["Plasma membrane","Plasmalemma","Cell wall","Nuclear membrane"], answer: "A" },
  { q: "Energy currency of cell is?", opts: ["ATP","ADP","AMP","Adenosine"], answer: "A" },
  { q: "Suicide bags of the cell are?", opts: ["Lysosomes","Centrioles","Vacuoles","Centromeres"], answer: "A" },
  { q: "Which is NOT a biomolecule?", opts: ["Calcium sulphate","Carbohydrates","Lipids","Nucleic acids"], answer: "A" },
  { q: "Fatty acids without double bonds are?", opts: ["Saturated","Unsaturated","Cis","Trans"], answer: "A" },

  { q: "Starch is a?", opts: ["Polysaccharide","Monosaccharide","Disaccharide","Oligosaccharide"], answer: "A" },
  { q: "Peptide bond joins?", opts: ["Amino acids","Sugars","Fatty acids","Nucleotides"], answer: "A" },
  { q: "Alpha helix and beta sheet are?", opts: ["Secondary protein structures","Primary","Tertiary","Quaternary"], answer: "A" },
  { q: "Antibodies are?", opts: ["Proteins","Lipids","Carbohydrates","Fats"], answer: "A" },
  { q: "RNA synthesis from DNA is called?", opts: ["Transcription","Translation","Replication","Transfusion"], answer: "A" },

  { q: "DNA strands are?", opts: ["Antiparallel","Parallel","Horizontal","Oblique"], answer: "A" },
  { q: "Photosynthesis occurs in?", opts: ["Chloroplast","Mitochondria","Ribosome","Nucleus"], answer: "A" },
  { q: "Calvin cycle occurs in?", opts: ["Stroma","Grana","Thylakoid","Chlorophyll"], answer: "A" },
  { q: "ATP is a?", opts: ["Nucleotide","Protein","Lipid","Carbohydrate"], answer: "A" },
  { q: "Aerobic respiration yields how many ATP?", opts: ["38","2","18","22"], answer: "A" },

  { q: "Glycolysis produces?", opts: ["Pyruvate","Lactate","CO2","Oxygen"], answer: "A" },
  { q: "DNA replication enzyme is?", opts: ["DNA polymerase","RNA polymerase","Ligase","Helicase"], answer: "A" },
  { q: "Interphase occurs during?", opts: ["Cell growth","Chromatid separation","Cytokinesis","Spindle formation"], answer: "A" },
  { q: "Chromatids are joined by?", opts: ["Centromere","Spindle","Microtubules","Cytoskeleton"], answer: "A" },
  { q: "Photosynthesis raw materials are?", opts: ["CO₂ and water","Oxygen and water","Hydrogen and oxygen","Carbon monoxide"], answer: "A" },

  { q: "Biodegradable leather was developed in?", opts: ["Mexico","USA","Canada","Brazil"], answer: "A" },
  { q: "Cactus leather is also known as?", opts: ["Prickly pear","Indian cactus","Breathing leaf","Arborea"], answer: "A" },
  { q: "Biodegradable leather company is?", opts: ["Desserto","Lakhaani","Arman","Exhale"], answer: "A" },
  { q: "Bionic chandelier was designed by?", opts: ["Julian Melchiorri","Leonardo da Vinci","Igor Sikorsky","Shannon"], answer: "A" },
  { q: "Bionic chandelier purifies air using?", opts: ["Photosynthetic algae","Filters","Fans","Carbon traps"], answer: "A" },

  { q: "Solar powered pest control was developed at?", opts: ["IIT Kharagpur","IIT Madras","IIT Bombay","IIT Kanpur"], answer: "A" },
  { q: "BioDCM pesticide protects from?", opts: ["Bacterial & fungal infection","Bacterial only","Fungal only","Viral"], answer: "A" },
  { q: "BioDCM is extracted from?", opts: ["Trichoderma asperellum","Bacillus anthracis","E. coli","Virus"], answer: "A" },
  { q: "Continuous glucose monitoring device is?", opts: ["CGM","Glucometer","Insulin pump","Pacemaker"], answer: "A" },
  { q: "Robotic surgery first used in?", opts: ["1987","1897","2001","1995"], answer: "A" },

  { q: "Pacemaker condition caused by blocked impulses is?", opts: ["Heart block","Heart attack","Heart clog","Arrhythmia"], answer: "A" },
  { q: "Bionic eye stimulates?", opts: ["Optic nerve","Cornea","Lens","Retina"], answer: "A" },
  { q: "Cochlear implant converts sound using?", opts: ["Sound processor","Battery","Electrode","Amplifier"], answer: "A" }

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

  remainingSeconds = 30 * 60;
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
