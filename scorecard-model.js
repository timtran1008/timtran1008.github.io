/* Based on P101 scorecard rev 8. Self-report routing, not a validated proficiency test. */
window.ScorecardModel = (() => {
  const questions = [
    ['The work you give AI','Think of the last work task you gave AI. What was it?',['Look up information or answer a question','Write or edit a short passage','Produce a whole document or presentation','Handle a task with several connected steps']],
    ['The work you give AI','After AI’s first answer, what do you usually do?',['Use what it gives me','Ask again in different words','Point out the specific parts to fix','I had already given it a standard before it started']],
    ['The work you give AI','How much of your everyday work does AI currently handle?',['I have tried it a few times','A few small tasks','One or two tasks, regularly','Almost a whole workflow from start to finish']],
    ['The work you give AI','What kind of task do you give AI?',['A task with one clear answer','Writing where the wording matters','Work where I must judge what counts as good','Work that combines several parts']],
    ['Context and repetition','When you open a new chat for the same task, what do you explain again?',['Everything from the beginning','Most of the background','Only the new information','Nothing — the context is already in place']],
    ['Context and repetition','Where do you keep the instructions for a recurring task?',['In my head — I type them again','In a note I copy and paste','In a Project, Gem, or custom GPT','In a reusable workflow or tool']],
    ['Context and repetition','Does AI know what a good result looks like for your task?',['I have not defined it','I correct the result each time','I give it an example or checklist','The standard is saved and used every time']],
    ['Context and repetition','How much back-and-forth does it take to get a usable result?',['I usually settle for what it gives me','Many rounds of explaining and editing','A few rounds','Usually one or two rounds']],
    ['Reach and reuse','How do AI tools fit into your work?',['One tool, occasionally','One tool, almost every day','Two or three tools for different tasks','Several tools with a defined job for each']],
    ['Reach and reuse','How does AI get the files it needs?',['I copy and paste the contents','I upload the files each time','The files are already in a Project','It can read my working folder through approved access']],
    ['Reach and reuse','Does any AI work run without you starting a new chat?',['No','Not yet, but I would like it to','I start a saved workflow with one action','A workflow runs on a schedule or trigger']],
    ['Reach and reuse','What have you set up for AI to reuse?',['Nothing yet','Some saved prompts','A Project, Gem, or GPT with instructions','A tool, skill, or automation I built']]
  ].map(([group,title,options]) => ({group,title,options}));
  const bands = [
    {title:'You have more work AI could help with.',cost:'Your subscription is available, but AI still carries only small pieces of your day. Start with one small task whose result you can check yourself.',action:'Get one useful task working.',guide:'resources/first-useful-task.html',label:'Try one task with the starter template',offer:'If you get stuck on that task, Quick Fix is the one-task option. You do not need a four-week programme to start.'},
    {title:'Useful answers still take too much setup or correction.',cost:'You are getting useful work from AI. The next move is keeping the context and quality standard that helped, so the following task needs less setup and rework.',action:'Save what a good result looks like.',guide:'resources/quality-checklist.html',label:'Build your reusable quality checklist',offer:'Quick Fix can help with one repeat problem. Tim Tutor is for building a repeatable system across your projects and recurring work.'},
    {title:'You are ready to connect the pieces.',cost:'You already give AI context and reuse parts of the work. Look for the remaining handoffs: finding files, moving outputs, repeating checks, and remembering what happens next.',action:'Make one workflow work from its own folder.',guide:'resources/better-ai-workflow.html',label:'Connect, check, and reuse one workflow',offer:'Bring the workflow you want to connect. We can discuss the fit and scope before you book anything.'}
  ];
  function analyse(answers) {
    if (!Array.isArray(answers) || answers.length !== questions.length || answers.some(x => x !== null && (!Number.isInteger(x) || x < 0 || x > 3))) throw new Error('Invalid scorecard answers');
    const answered = answers.filter(x => x !== null).length;
    const complete = answered === questions.length;
    const total = complete ? answers.reduce((sum,x) => sum+x,0) : null;
    // Saved context and a working standard take precedence over the broad total.
    // Tool count or task type must not tell a Project/Gem user to start from scratch.
    const contextReady = complete && [4,5,6,9].every(i => answers[i] >= 2);
    const band = complete ? (contextReady ? 2 : total <= 12 ? 0 : total <= 24 ? 1 : 2) : null;
    const blocks = [0,1,2].map(group => {
      const values=answers.slice(group*4,group*4+4);
      return {name:questions[group*4].group,answered:values.filter(x=>x!==null).length,score:values.includes(null)?null:values.reduce((sum,x)=>sum+x,0)};
    });
    let recommendation = complete ? {...bands[band]} : {title:'Your snapshot has a few open questions.',cost:'Skipped answers stay unknown. They are not counted as a low score, so there is no overall score or band yet. You can go back and fill them in, or try one small task with the starter template.',action:'Choose one useful task you can check.',guide:'resources/first-useful-task.html',label:'Try the starter template',offer:'Bring that task to a conversation with me if you would like help.'};
    if (complete && band > 0 && !contextReady) {
      if (answers[4] < 2 || answers[5] < 2 || answers[9] < 2) {
        recommendation = {title:'Keep the context that is working.',cost:'You said you still repeat background, copy instructions, or upload files for the next run. Save the brief and files for one recurring task so you can start with only the new input.',action:'Save one task’s context before the next chat.',guide:'resources/save-your-context.html',label:'Use the one-page context template',offer:bands[1].offer};
      } else if (answers[6] < 2) {
        recommendation = {title:'Your context is in place. Make the quality standard explicit.',cost:'You have saved the background and files. You also said AI does not yet have an example or checklist for a good result. Add that standard before connecting more tools.',action:'Turn a good example into a short checklist.',guide:'resources/quality-checklist.html',label:'Build your reusable quality checklist',offer:bands[1].offer};
      }
    }
    return {answered,total,band,blocks,contextReady,recommendation};
  }
  return {questions,analyse};
})();
