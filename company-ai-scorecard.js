const form = document.querySelector('#pilot-form');
const result = document.querySelector('#pilot-result');
const resultHeading = document.querySelector('#pilot-result-heading');
const resultCopy = document.querySelector('#pilot-result-copy');
const resultActions = document.querySelector('#pilot-result-actions');
const inquiry = document.querySelector('#pilot-inquiry');

const preparation = new Map([
  ['workflow', 'Pick a recurring task with a clear output, such as a weekly team report.'],
  ['owner', 'Name the person who will test the setup and run it after handover.'],
  ['access', 'Confirm which AI tool and example inputs the company approves for the pilot.'],
  ['baseline', 'Confirm who can time one typical run from raw inputs to a review-ready draft.'],
  ['quality', 'Identify the reviewer who can describe what a good first draft needs.'],
]);

form.addEventListener('submit', event => {
  event.preventDefault();
  const answers = new FormData(form);
  const missing = [...preparation].filter(([field]) => answers.get(field) !== 'ready');
  const title = answers.get('workflow') !== 'ready'
    ? 'Choose a workflow first'
    : 'Prepare the workflow for a pilot';

  resultHeading.textContent = missing.length ? title : 'Ready to scope a pilot';
  resultCopy.textContent = missing.length
    ? 'Use these steps to prepare the workflow with your team.'
    : 'Tell Tim which workflow you want to test and who owns it. Tim helps measure the current process and build a quality checklist at the start of the pilot.';
  resultActions.replaceChildren();
  for (const [, action] of missing) {
    const item = document.createElement('li');
    item.textContent = action;
    resultActions.append(item);
  }
  resultActions.hidden = missing.length === 0;
  inquiry.hidden = missing.length > 0;
  result.hidden = false;
  resultHeading.focus();
});

form.addEventListener('change', () => { result.hidden = true; });
form.addEventListener('reset', () => { result.hidden = true; });
form.hidden = false;
