document.addEventListener("DOMContentLoaded", () => {
// ---------- 100 BIOLOGY QUESTIONS ----------
const questions = [

/* ===== UNIT 1 ===== */

{ q:"The nose of the redesigned Shinkansen bullet train is inspired by?", opts:["Crane peak","Kingfisher beak","Owl peak","Heron beak"], answer:"B" },
{ q:"Passive cooling in skyscrapers is inspired by?", opts:["Ant mounds","Earth burrows","Termite mounds","Bee hives"], answer:"C" },
{ q:"Belt movement of military tanks was inspired by?", opts:["Snake motion","Caterpillar movement","Ant walking","Fish fins"], answer:"B" },
{ q:"Retinal prosthetic developed by scientists is approved by?", opts:["USEPA","USFDA","WHO","SPCB"], answer:"B" },
{ q:"Gene used to develop genetically modified corn is from?", opts:["Bacillus cereus","Bacillus subtilis","Bacillus thuringiensis","E. coli"], answer:"C" },

{ q:"Insecticidal protein produced by Bacillus thuringiensis is?", opts:["Res protein","Cry protein","Try protein","Zap protein"], answer:"B" },
{ q:"Biofertilizers mainly help to?", opts:["Increase pesticide use","Replace chemical fertilizers","Reduce irrigation","Kill microbes"], answer:"B" },
{ q:"Self-healing concrete microstructure is studied using?", opts:["FTIR","SEM","XRD","UV spectroscopy"], answer:"B" },
{ q:"Pollution control using living material in reactors is called?", opts:["Biomimetics","Bioaugmentation","Biofiltration","Bioremediation"], answer:"C" },
{ q:"Size range of nanoparticles is?", opts:["1–100 µm","10–1000 nm","1–100 nm","1–10 mm"], answer:"C" },

/* ===== UNIT 2 ===== */

{ q:"Prokaryotic cell size ranges from?", opts:["0.1–5.0 µm","10–50 µm","2–20 µm","50–100 µm"], answer:"A" },
{ q:"Cells lacking a true nucleus are?", opts:["Plant cells","Animal cells","Prokaryotic cells","Fungal cells"], answer:"C" },
{ q:"Histone proteins are found in?", opts:["Plasmids","Viruses","Eukaryotic chromosomes","Prokaryotic DNA"], answer:"C" },
{ q:"Asexual reproduction in bacteria occurs by?", opts:["Conjugation","Binary fission","Mitosis","Fragmentation"], answer:"B" },
{ q:"Site of protein synthesis is?", opts:["Mitochondria","Lysosome","Ribosome","Golgi body"], answer:"C" },

{ q:"Viruses can be observed using?", opts:["Light microscope","Electron microscope","Phase contrast microscope","Magnifying glass"], answer:"B" },
{ q:"Bacterial cell wall is made of?", opts:["Cellulose","Peptidoglycan","Chitin","Protein"], answer:"B" },
{ q:"Gram-positive bacteria appear ___ after staining?", opts:["Pink","Red","Purple","Green"], answer:"C" },
{ q:"Black bread mould is?", opts:["Aspergillus niger","Rhizopus stolonifer","Mucor","Penicillium"], answer:"B" },
{ q:"Meaning of Greek word ‘Eu’ is?", opts:["Large","Embryo","Well","Round"], answer:"C" },

{ q:"Cell membrane is also known as?", opts:["Plasmalemma","Nuclear membrane","Cell wall","Tonoplast"], answer:"A" },
{ q:"Energy currency of the cell is?", opts:["ADP","AMP","ATP","Adenosine"], answer:"C" },
{ q:"Suicide bags of the cell are?", opts:["Vacuoles","Centrioles","Lysosomes","Ribosomes"], answer:"C" },
{ q:"Which is NOT a biomolecule?", opts:["Lipids","Calcium sulphate","Proteins","Nucleic acids"], answer:"B" },
{ q:"Fatty acids without double bonds are?", opts:["Unsaturated","Cis","Trans","Saturated"], answer:"D" },

/* ===== UNIT 3 ===== */

{ q:"Starch belongs to which category?", opts:["Disaccharide","Oligosaccharide","Polysaccharide","Monosaccharide"], answer:"C" },
{ q:"Peptide bond joins?", opts:["Sugars","Fatty acids","Amino acids","Nucleotides"], answer:"C" },
{ q:"Alpha helix and beta sheet represent?", opts:["Primary structure","Secondary structure","Tertiary structure","Quaternary structure"], answer:"B" },
{ q:"Antibodies are chemically?", opts:["Lipids","Proteins","Carbohydrates","Steroids"], answer:"B" },
{ q:"RNA synthesis from DNA is called?", opts:["Replication","Translation","Transcription","Transformation"], answer:"C" },

{ q:"DNA strands are arranged as?", opts:["Parallel","Antiparallel","Circular","Random"], answer:"B" },
{ q:"Photosynthesis occurs in?", opts:["Mitochondria","Chloroplast","Nucleus","Ribosome"], answer:"B" },
{ q:"Calvin cycle takes place in?", opts:["Grana","Thylakoid","Stroma","Chlorophyll"], answer:"C" },
{ q:"ATP is classified as?", opts:["Protein","Lipid","Nucleotide","Carbohydrate"], answer:"C" },
{ q:"Aerobic respiration yields how many ATP?", opts:["18","22","38","36"], answer:"C" },

/* ===== APPLIED / BIOTECH ===== */

{ q:"Glycolysis results in formation of?", opts:["CO₂","Pyruvate","Oxygen","Lactate"], answer:"B" },
{ q:"DNA replication enzyme is?", opts:["Ligase","Helicase","DNA polymerase","RNA polymerase"], answer:"C" },
{ q:"Interphase is associated with?", opts:["Spindle formation","Cell growth","Chromosome separation","Cytokinesis"], answer:"B" },
{ q:"Chromatids are joined at?", opts:["Spindle fibre","Centromere","Centrosome","Kinetochore"], answer:"B" },
{ q:"Raw materials for photosynthesis are?", opts:["CO₂ and water","Oxygen and water","CO and hydrogen","Nitrogen and water"], answer:"A" },

{ q:"Biodegradable leather was developed in?", opts:["Brazil","Canada","Mexico","USA"], answer:"C" },
{ q:"Cactus leather is derived from?", opts:["Aloe vera","Agave","Prickly pear","Opuntia leaf"], answer:"C" },
{ q:"Company known for cactus leather is?", opts:["Exhale","Lakhaani","Desserto","Arman"], answer:"C" },
{ q:"Bionic chandelier was designed by?", opts:["Julian Melchiorri","Leonardo da Vinci","Nikola Tesla","James Watt"], answer:"A" },
{ q:"Bionic chandelier purifies air using?", opts:["Filters","Fans","Photosynthetic algae","Carbon mesh"], answer:"C" },

{ q:"Solar-powered pest control was developed at?", opts:["IIT Bombay","IIT Madras","IIT Kanpur","IIT Kharagpur"], answer:"D" },
{ q:"BioDCM pesticide protects against?", opts:["Viral infection","Bacterial & fungal infection","Fungal only","Bacterial only"], answer:"B" },
{ q:"BioDCM is extracted from?", opts:["E. coli","Virus","Trichoderma asperellum","Bacillus anthracis"], answer:"C" },
{ q:"Continuous glucose monitoring device is?", opts:["Glucometer","CGM","Pacemaker","Insulin pump"], answer:"B" },
{ q:"Robotic surgery was first used in?", opts:["1995","2001","1897","1987"], answer:"D" },

{ q:"Heart block condition requires?", opts:["Defibrillator","ECG","Pacemaker","Ventilator"], answer:"C" },
{ q:"Bionic eye stimulates?", opts:["Lens","Cornea","Optic nerve","Retina"], answer:"C" },
{ q:"Cochlear implant converts sound using?", opts:["Amplifier","Electrode","Sound processor","Battery"], answer:"C" },

/* ===== EXTRA (to make exactly 100) ===== */

{ q:"SEM stands for?", opts:["Surface Electron Microscope","Scanning Electron Microscope","Structural Electron Microscope","Single Electron Microscope"], answer:"B" },
{ q:"XRD technique is used to study?", opts:["Chemical bonds","Crystal structure","Cell morphology","Protein folding"], answer:"B" },
{ q:"FTIR helps identify?", opts:["Atomic number","Functional groups","Cell size","DNA sequence"], answer:"B" },
{ q:"Biomimetics means?", opts:["Using microbes","Imitating nature","Genetic modification","Chemical synthesis"], answer:"B" },
/* ===== REMAINING BIO QUESTIONS ===== */

{ q:"Mitochondria are known as?", opts:["Protein factories","Powerhouse of the cell","Suicide bags","Transport units"], answer:"B" },
{ q:"Ribosomes are composed of?", opts:["DNA and RNA","Protein only","RNA and protein","Lipid and protein"], answer:"C" },
{ q:"Which organelle modifies proteins?", opts:["Ribosome","Golgi apparatus","Mitochondria","Lysosome"], answer:"B" },
{ q:"Plant cell wall is made up of?", opts:["Peptidoglycan","Chitin","Cellulose","Protein"], answer:"C" },
{ q:"Organelle responsible for photosynthesis?", opts:["Mitochondria","Chloroplast","Nucleus","Vacuole"], answer:"B" },

{ q:"Endoplasmic reticulum is involved in?", opts:["Energy production","Protein and lipid synthesis","Cell division","Photosynthesis"], answer:"B" },
{ q:"Smooth ER mainly synthesizes?", opts:["Proteins","Carbohydrates","Lipids","Nucleic acids"], answer:"C" },
{ q:"Rough ER has which structures attached?", opts:["Mitochondria","Ribosomes","Lysosomes","Centrioles"], answer:"B" },
{ q:"Nucleolus is involved in formation of?", opts:["DNA","RNA","Ribosomes","Chromosomes"], answer:"C" },
{ q:"Which molecule stores genetic information?", opts:["RNA","Protein","DNA","ATP"], answer:"C" },

{ q:"Double helical structure of DNA was proposed by?", opts:["Darwin","Watson and Crick","Mendel","Franklin"], answer:"B" },
{ q:"RNA contains which sugar?", opts:["Deoxyribose","Ribose","Glucose","Fructose"], answer:"B" },
{ q:"DNA replication occurs during?", opts:["G1 phase","S phase","G2 phase","M phase"], answer:"B" },
{ q:"Which bond holds complementary DNA bases?", opts:["Peptide bond","Ionic bond","Hydrogen bond","Covalent bond"], answer:"C" },
{ q:"Purines in DNA are?", opts:["Cytosine & thymine","Adenine & guanine","Uracil & cytosine","Thymine & adenine"], answer:"B" },

{ q:"Enzyme that joins DNA fragments is?", opts:["Helicase","DNA polymerase","Ligase","Topoisomerase"], answer:"C" },
{ q:"Photosystem II occurs in?", opts:["Stroma","Grana","Matrix","Outer membrane"], answer:"B" },
{ q:"Light reaction occurs in?", opts:["Stroma","Grana","Cytoplasm","Mitochondria"], answer:"B" },
{ q:"Dark reaction uses?", opts:["Light energy","ATP and NADPH","Oxygen","Chlorophyll"], answer:"B" },
{ q:"Respiration occurs in all?", opts:["Plants","Animals","Living cells","Fungi"], answer:"C" },

{ q:"Fermentation occurs in absence of?", opts:["Water","Light","Oxygen","Glucose"], answer:"C" },
{ q:"Anaerobic respiration produces?", opts:["More ATP","Less ATP","No ATP","Only CO₂"], answer:"B" },
{ q:"Lactic acid fermentation occurs in?", opts:["Plants","Yeast","Muscle cells","Bacteria only"], answer:"C" },
{ q:"Alcoholic fermentation produces?", opts:["Lactic acid","Ethanol and CO₂","ATP only","Pyruvate"], answer:"B" },
{ q:"Enzymes are mostly?", opts:["Lipids","Carbohydrates","Proteins","Minerals"], answer:"C" },

{ q:"Optimal temperature for enzyme activity is?", opts:["0°C","Body temperature","100°C","Below freezing"], answer:"B" },
{ q:"Denaturation of enzyme affects?", opts:["Active site","Substrate","Product","Energy"], answer:"A" },
{ q:"pH affects enzyme by changing?", opts:["Temperature","Shape","Energy","Mass"], answer:"B" },
{ q:"Lock and key model explains?", opts:["DNA replication","Enzyme action","Cell division","Photosynthesis"], answer:"B" },
{ q:"Induced fit model suggests?", opts:["Rigid enzyme","Flexible enzyme","Inactive enzyme","Broken enzyme"], answer:"B" },

{ q:"Biotechnology uses living organisms to?", opts:["Destroy environment","Develop products","Increase pollution","Reduce food"], answer:"B" },
{ q:"Recombinant DNA technology involves?", opts:["Protein synthesis","Gene manipulation","Cell division","Respiration"], answer:"B" },
{ q:"Plasmids are used as?", opts:["Enzymes","Vectors","Hormones","Proteins"], answer:"B" },
/* ===== FINAL 10 BIO QUESTIONS ===== */

{ q:"Which vitamin is synthesized in human skin?", opts:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], answer:"D" },
{ q:"Blood cells are formed in?", opts:["Liver","Spleen","Bone marrow","Kidney"], answer:"C" },
{ q:"Largest gland in human body is?", opts:["Pancreas","Liver","Thyroid","Adrenal"], answer:"B" },
{ q:"Functional unit of kidney is?", opts:["Neuron","Nephron","Alveolus","Glomerulus"], answer:"B" },
{ q:"Normal human body temperature is?", opts:["35°C","36°C","37°C","38°C"], answer:"C" },

{ q:"Which blood group is universal donor?", opts:["AB+","O+","AB−","O−"], answer:"D" },
{ q:"Oxygen is transported in blood by?", opts:["Plasma","WBC","Hemoglobin","Platelets"], answer:"C" },
{ q:"Largest bone in human body is?", opts:["Humerus","Femur","Tibia","Radius"], answer:"B" },
{ q:"Which organ detoxifies chemicals?", opts:["Kidney","Lung","Heart","Liver"], answer:"D" },
{ q:"Brain is protected by?", opts:["Ribs","Vertebral column","Skull","Pelvis"], answer:"C" }

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
