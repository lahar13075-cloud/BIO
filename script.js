document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 BIOLOGY QUESTIONS ----------
const questions = [
  { q:"The nose of the redesigned Shinkansen bullet train is inspired by?", opts:["Crane peak","Kingfisher beak","Owl peak","Heron beak"], answer:"B" },
  { q:"Passive cooling in skyscrapers is inspired by?", opts:["Ant mounds","Termite mounds","Earth burrows","Bee hives"], answer:"B" },
  { q:"Belt movement of military tanks was inspired by?", opts:["Snake movement","Caterpillar movement","Ant movement","Worm crawling"], answer:"B" },
  { q:"Retinal prosthetic developed by scientists is approved by?", opts:["WHO","USFDA","CPCB","USEPA"], answer:"B" },
  { q:"Gene used to develop genetically modified corn is from?", opts:["Bacillus cereus","Bacillus thuringiensis","E. coli","Bacillus subtilis"], answer:"B" },

  { q:"Protein produced by Bacillus thuringiensis is?", opts:["Res protein","Cry protein","Try protein","Zap protein"], answer:"B" },
  { q:"Biofertilizers mainly help to?", opts:["Increase pesticides","Replace chemical fertilizers","Reduce soil microbes","Stop plant growth"], answer:"B" },
  { q:"Microstructure analysis of self-healing concrete uses?", opts:["FTIR","SEM","XPS","UV"], answer:"B" },
  { q:"Pollution control using living organisms is called?", opts:["Biomagnification","Biofiltration","Bioremediation","Bioleaching"], answer:"B" },
  { q:"Nanoparticle size range is?", opts:["100–1000 nm","1–100 nm","1–100 μm","0.1–10 mm"], answer:"B" },

  { q:"Prokaryotic cell size range is?", opts:["10–50 μm","0.1–5 μm","2–20 μm","50–100 μm"], answer:"B" },
  { q:"Cells lacking true nucleus are?", opts:["Animal cells","Prokaryotic cells","Plant cells","Fungal cells"], answer:"B" },
  { q:"Histone proteins are found in?", opts:["Viruses","Eukaryotic chromosomes","Plasmids","Prokaryotes"], answer:"B" },
  { q:"Asexual reproduction in bacteria occurs by?", opts:["Mitosis","Binary fission","Conjugation","Fragmentation"], answer:"B" },
  { q:"Protein synthesis occurs in?", opts:["Golgi body","Ribosomes","Lysosomes","Nucleus"], answer:"B" },

  { q:"Viruses can be seen using?", opts:["Light microscope","Electron microscope","Magnifying glass","Fluorescent lamp"], answer:"B" },
  { q:"Bacterial cell wall is made of?", opts:["Cellulose","Peptidoglycan","Chitin","Lignin"], answer:"B" },
  { q:"Gram-positive bacteria appear ___ after staining?", opts:["Red","Purple","Pink","Brown"], answer:"B" },
  { q:"Black bread mold is?", opts:["Mucor","Rhizopus stolonifer","Aspergillus","Yeast"], answer:"B" },
  { q:"Greek word ‘Eu’ means?", opts:["Large","Well","True","Cell"], answer:"B" },

  { q:"Cell membrane is also called?", opts:["Nuclear membrane","Plasma membrane","Cell wall","Tonoplast"], answer:"B" },
  { q:"Energy currency of the cell is?", opts:["ADP","ATP","AMP","NAD"], answer:"B" },
  { q:"Suicide bags of the cell are?", opts:["Vacuoles","Lysosomes","Centrioles","Ribosomes"], answer:"B" },
  { q:"Which is NOT a biomolecule?", opts:["Proteins","Calcium sulphate","Lipids","Carbohydrates"], answer:"B" },
  { q:"Fatty acids without double bonds are?", opts:["Unsaturated","Saturated","Cis","Trans"], answer:"B" },

  { q:"Starch belongs to?", opts:["Disaccharide","Polysaccharide","Monosaccharide","Oligosaccharide"], answer:"B" },
  { q:"Peptide bond joins?", opts:["Sugars","Amino acids","Fatty acids","Nucleotides"], answer:"B" },
  { q:"Alpha helix is a?", opts:["Primary structure","Secondary structure","Tertiary structure","Quaternary"], answer:"B" },
  { q:"Antibodies are?", opts:["Lipids","Proteins","Carbohydrates","Minerals"], answer:"B" },
  { q:"RNA formed from DNA is called?", opts:["Replication","Transcription","Translation","Mutation"], answer:"B" },

  { q:"DNA strands are arranged?", opts:["Parallel","Antiparallel","Circular","Random"], answer:"B" },
  { q:"Photosynthesis occurs in?", opts:["Mitochondria","Chloroplast","Ribosome","Nucleus"], answer:"B" },
  { q:"Calvin cycle occurs in?", opts:["Grana","Stroma","Thylakoid","Lamella"], answer:"B" },
  { q:"ATP is a type of?", opts:["Protein","Nucleotide","Lipid","Carbohydrate"], answer:"B" },
  { q:"Aerobic respiration yields?", opts:["2 ATP","38 ATP","18 ATP","22 ATP"], answer:"B" },

  { q:"Glycolysis produces?", opts:["CO₂","Pyruvate","Oxygen","Water"], answer:"B" },
  { q:"DNA replication enzyme is?", opts:["Ligase","DNA polymerase","RNA polymerase","Helicase"], answer:"B" },
  { q:"Interphase mainly involves?", opts:["Cell division","Cell growth","Chromosome separation","Spindle formation"], answer:"B" },
  { q:"Chromatids are joined by?", opts:["Spindle fibers","Centromere","Microtubules","Centrosome"], answer:"B" },
  { q:"Raw materials of photosynthesis?", opts:["Oxygen & water","CO₂ & water","Hydrogen & oxygen","CO & water"], answer:"B" },

  { q:"Biodegradable leather was developed in?", opts:["USA","Mexico","Brazil","India"], answer:"B" },
  { q:"Cactus leather is obtained from?", opts:["Aloe vera","Prickly pear","Agave","Opuntia ficus"], answer:"B" },
  { q:"Biodegradable leather brand is?", opts:["Exhale","Desserto","Lakhaani","GreenTex"], answer:"B" },
  { q:"Bionic chandelier was designed by?", opts:["Nikola Tesla","Julian Melchiorri","Leonardo da Vinci","Einstein"], answer:"B" },
  { q:"Bionic chandelier purifies air using?", opts:["Filters","Photosynthetic algae","Fans","Carbon rods"], answer:"B" },

  { q:"Solar powered pest control was developed at?", opts:["IIT Bombay","IIT Kharagpur","IIT Delhi","IIT Madras"], answer:"B" },
  { q:"BioDCM pesticide protects against?", opts:["Viruses","Bacterial & fungal infection","Only bacteria","Only fungi"], answer:"B" },
  { q:"BioDCM is extracted from?", opts:["E. coli","Trichoderma asperellum","Virus","Bacillus"], answer:"B" },
  { q:"Continuous glucose monitoring device is?", opts:["Glucometer","CGM","Pacemaker","Insulin pump"], answer:"B" },
  { q:"First robotic surgery was performed in?", opts:["1995","1987","2001","1975"], answer:"B" },

  { q:"Heart block requires use of?", opts:["Defibrillator","Pacemaker","Stent","Ventilator"], answer:"B" },
  { q:"Bionic eye stimulates the?", opts:["Lens","Optic nerve","Cornea","Iris"], answer:"B" },
  { q:"Cochlear implant works using?", opts:["Amplifier","Sound processor","Battery","Microphone"], answer:"B" },
  { q:"Human genome project completed in?", opts:["1990","2003","2010","1995"], answer:"B" },
  { q:"CRISPR is used for?", opts:["Cloning","Gene editing","Protein synthesis","Vaccination"], answer:"B" }
  ,{ q:"Human insulin is produced using?", opts:["Plant cells","Recombinant DNA technology","Animal tissue","Chemical synthesis"], answer:"B" },
  { q:"Plasmids are commonly found in?", opts:["Viruses","Bacteria","Fungi","Algae"], answer:"B" },
  { q:"Restriction enzymes are also called?", opts:["Ligases","Molecular scissors","Polymerases","Vectors"], answer:"B" },
  { q:"Vector used in genetic engineering?", opts:["Ribosome","Plasmid","Chromosome","Protein"], answer:"B" },
  { q:"Gel electrophoresis separates DNA based on?", opts:["Color","Size","Shape","Charge"], answer:"B" },

  { q:"PCR stands for?", opts:["Protein Chain Reaction","Polymerase Chain Reaction","Plasma Cell Reaction","Primer Copy Reaction"], answer:"B" },
  { q:"DNA fingerprinting was discovered by?", opts:["Watson","Alec Jeffreys","Crick","Mendel"], answer:"B" },
  { q:"Stem cells have ability of?", opts:["Digestion","Differentiation","Respiration","Photosynthesis"], answer:"B" },
  { q:"Totipotent cells can form?", opts:["Only tissues","Entire organism","Only organs","Only cells"], answer:"B" },
  { q:"Cloning of Dolly sheep used?", opts:["Binary fission","Somatic cell nuclear transfer","Budding","Fragmentation"], answer:"B" },

  { q:"Vaccines provide?", opts:["Immediate cure","Active immunity","Passive immunity","Temporary relief"], answer:"B" },
  { q:"Antibiotics are effective against?", opts:["Viruses","Bacteria","Fungi","Protozoa"], answer:"B" },
  { q:"Penicillin was discovered by?", opts:["Louis Pasteur","Alexander Fleming","Robert Koch","Edward Jenner"], answer:"B" },
  { q:"Immunity transferred from mother to child is?", opts:["Active","Passive","Artificial","Acquired"], answer:"B" },
  { q:"Blood group discovered by Karl Landsteiner is?", opts:["Rh","ABO","MN","Bombay"], answer:"B" },

  { q:"Universal donor blood group?", opts:["AB+","O−","AB−","O+"], answer:"B" },
  { q:"Universal recipient blood group?", opts:["O−","AB+","O+","AB−"], answer:"B" },
  { q:"Hemoglobin contains?", opts:["Calcium","Iron","Magnesium","Copper"], answer:"B" },
  { q:"Platelets help in?", opts:["Oxygen transport","Blood clotting","Immunity","Digestion"], answer:"B" },
  { q:"Normal human body temperature is?", opts:["35°C","37°C","39°C","36°C"], answer:"B" },

  { q:"Largest gland in human body?", opts:["Pancreas","Liver","Thyroid","Adrenal"], answer:"B" },
  { q:"Functional unit of kidney?", opts:["Neuron","Nephron","Alveolus","Glomerulus"], answer:"B" },
  { q:"Gas exchange occurs in?", opts:["Bronchi","Alveoli","Trachea","Larynx"], answer:"B" },
  { q:"Heartbeat is controlled by?", opts:["Cerebellum","Medulla oblongata","Hypothalamus","Cerebrum"], answer:"B" },
  { q:"Largest bone in human body?", opts:["Humerus","Femur","Tibia","Pelvis"], answer:"B" },

  { q:"Vitamin D deficiency causes?", opts:["Scurvy","Rickets","Beriberi","Night blindness"], answer:"B" },
  { q:"Vitamin C deficiency causes?", opts:["Rickets","Scurvy","Beriberi","Pellagra"], answer:"B" },
  { q:"Night blindness is due to lack of?", opts:["Vitamin B","Vitamin A","Vitamin C","Vitamin D"], answer:"B" },
  { q:"Hormone regulating blood sugar?", opts:["Thyroxine","Insulin","Adrenaline","Glucagon"], answer:"B" },
  { q:"Plant hormone responsible for growth?", opts:["Ethylene","Auxin","Abscisic acid","Cytokinin"], answer:"B" },

  { q:"Transpiration occurs through?", opts:["Roots","Stomata","Stem","Flowers"], answer:"B" },
  { q:"Main site of photosynthesis?", opts:["Root","Leaf","Stem","Flower"], answer:"B" },
  { q:"Water transport in plants occurs through?", opts:["Phloem","Xylem","Cortex","Cambium"], answer:"B" },
  { q:"Food transport in plants occurs through?", opts:["Xylem","Phloem","Cortex","Pith"], answer:"B" },
  { q:"Pollination is transfer of pollen from?", opts:["Ovule to ovary","Anther to stigma","Seed to fruit","Flower to leaf"], answer:"B" }
  ,{ q:"Study of fungi is called?", opts:["Bryology","Mycology","Zoology","Phycology"], answer:"B" },
  { q:"Study of algae is called?", opts:["Mycology","Phycology","Bryology","Zoology"], answer:"B" },
  { q:"Bryophytes are also called?", opts:["Seed plants","Amphibians of plant kingdom","Flowering plants","Vascular plants"], answer:"B" },
  { q:"Plants without vascular tissues are?", opts:["Pteridophytes","Bryophytes","Gymnosperms","Angiosperms"], answer:"B" },
  { q:"Double fertilization occurs in?", opts:["Gymnosperms","Angiosperms","Bryophytes","Pteridophytes"], answer:"B" },

  { q:"Edible part of coconut is?", opts:["Endosperm","Mesocarp","Exocarp","Pericarp"], answer:"A" },
  { q:"Which tissue transports food in plants?", opts:["Phloem","Xylem","Cortex","Cambium"], answer:"A" },
  { q:"Respiration in plants occurs through?", opts:["Roots only","Stomata","Leaves only","Stem only"], answer:"B" },
  { q:"Green pigment in plants is?", opts:["Carotene","Chlorophyll","Xanthophyll","Anthocyanin"], answer:"B" },
  { q:"Oxygen released during photosynthesis comes from?", opts:["CO₂","Water","Glucose","Chlorophyll"], answer:"B" }
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

    let html = `<div class='qtext'><strong>Q${order.indexOf(i)+1}.</strong>
 ${q.q}</div><div class='options'>`;

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

  <button class="btn ripple" style="margin-top:12px" onclick="finishTest()">
    Finish / Exit
  </button>
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
function finishTest(){
  if(confirm("Are you sure you want to exit the test?")){
    window.location.reload(); // safest way to exit
  }
}
