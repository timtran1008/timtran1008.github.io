(() => {
  const model=window.ScorecardModel,form=document.querySelector('#scorecard-form');
  let index=0,answers=Array(12).fill(null),started=false;
  const intro=document.querySelector('#scorecard-intro'),question=document.querySelector('#scorecard-question'),result=document.querySelector('#scorecard-result');
  const title=document.querySelector('#question-title'),options=document.querySelector('#question-options');
  const back=document.querySelector('#scorecard-back'),next=document.querySelector('#scorecard-next');
  function showQuestion(focus=true){
    started=true;intro.hidden=true;question.hidden=false;result.hidden=true;
    const item=model.questions[index];title.textContent=item.title;document.querySelector('#question-group').textContent=item.group;
    document.querySelector('#question-progress').textContent=`Question ${index+1} of 12`;
    document.querySelector('#scorecard-progress').value=index;options.replaceChildren();
    item.options.forEach((text,value)=>{const label=document.createElement('label'),input=document.createElement('input'),span=document.createElement('span');input.type='radio';input.name='answer';input.value=value;input.checked=answers[index]===value;span.textContent=text;label.append(input,span);options.append(label);input.addEventListener('change',()=>{answers[index]=value;next.disabled=false;});});
    back.disabled=index===0;next.disabled=answers[index]===null;next.textContent=index===11?'See my result':'Next';
    if(focus)title.focus();
  }
  function finish(){
    question.hidden=true;result.hidden=false;const data=model.analyse(answers),r=data.recommendation;
    document.querySelector('#result-score').textContent=`${data.answered} of 12 answered · your workflow, as described`;
    document.querySelector('#result-title').textContent=r.title;document.querySelector('#result-copy').textContent=r.cost;
    document.querySelector('#result-action').textContent=r.action;const guide=document.querySelector('#result-guide');guide.href=r.guide;guide.textContent=r.label;document.querySelector('#result-offer').textContent=r.offer;
    const block=document.querySelector('#result-blocks');block.replaceChildren();data.blocks.forEach(item=>{const row=document.createElement('div'),label=document.createElement('span'),value=document.createElement('strong');label.textContent=item.name;value.textContent=item.score===null?`${item.answered}/4 answered`:`${item.score}/12`;row.append(label,value);block.append(row);});
    document.querySelector('#result-title').focus();
  }
  document.querySelector('#scorecard-start').addEventListener('click',()=>showQuestion());
  form.addEventListener('submit',event=>{event.preventDefault();if(!started||answers[index]===null)return;if(index===11)finish();else{index++;showQuestion();}});
  back.addEventListener('click',()=>{if(index>0){index--;showQuestion();}});
  document.querySelector('#scorecard-skip').addEventListener('click',()=>{answers[index]=null;if(index===11)finish();else{index++;showQuestion();}});
  document.querySelector('#scorecard-restart').addEventListener('click',()=>{index=0;answers=Array(12).fill(null);showQuestion();});
  document.querySelector('#scorecard-review').addEventListener('click',()=>{index=0;showQuestion();});
  document.querySelector('#scorecard-download').addEventListener('click',()=>{
    const data=model.analyse(answers),r=data.recommendation;
    const text=['MY AI WORKFLOW SNAPSHOT','Self-reported reflection, not a proficiency test.',`${data.answered} of 12 questions answered`,r.title,r.cost,'NEXT STEP: '+r.action,'',...model.questions.map((q,i)=>`${i+1}. ${q.title}\n${answers[i]===null?'Not answered':q.options[answers[i]]}`),'','Tim Tran — timqtran1008@gmail.com'].join('\n\n');
    const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='my-ai-workflow-snapshot.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  const emailForm=document.querySelector('#scorecard-email-form');
  const email=document.querySelector('#scorecard-email'),send=document.querySelector('#scorecard-email-send'),status=document.querySelector('#scorecard-email-status');
  const LEADS='https://docs.google.com/forms/d/e/1FAIpQLSd46CsoWIgL46joaZlhXY0rsNkbk10IPjSWu9sda4QUZlrpKA/formResponse';
  emailForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(send.disabled)return;
    const address=email.value.trim();
    const data=model.analyse(answers),r=data.recommendation,body=new URLSearchParams();
    body.set('entry.1595574200',address);body.set('entry.1458386879',`${data.answered}/12 answered · ${r.title}`);
    body.set('entry.816692617',model.questions.map((q,i)=>`${i+1}. ${q.title} — ${answers[i]===null?'Not answered':q.options[answers[i]]}`).join('\n'));
    send.disabled=true;status.textContent='Sending…';
    fetch(LEADS,{method:'POST',mode:'no-cors',body}).then(()=>{status.textContent='Your request was submitted. Delivery could not be confirmed. If you don?t hear back, email timqtran1008@gmail.com.';}).catch(()=>{send.disabled=false;status.textContent='That did not send. Please email timqtran1008@gmail.com instead.';});
  });
})();
