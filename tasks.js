module.exports = {
  buttons: [
    [{ text: 'Bitcoin change in $', callback_data: '_bitweek' }],
    [{ text: 'Random js interview question', callback_data: '_jsq' }],
    [{ text: 'Random js interview task', callback_data: '_jst' }],
    // [{ text: 'Random java interview question', callback_data: '_javaq' }],
    [{ text: 'Random chapter from learn.javascript', callback_data: '_learnjs' }],
    [{ text: 'Random chapter from OCA/OCP exams', callback_data: '_learnjava' }],
    // [{ text: 'Get frontend vacancies and their requirements', callback_data: '_hh' }],
    // [{ text: 'English grammar random chapter', callback_data: '_english' }],
    // [{ text: 'Random words theme to learn', callback_data: '_english_words' }],
    [{ text: 'Random SCP object', callback_data: '_SCP' }],
    [{ text: 'Random pattern from refactoring.guru', callback_data: '_guru' }],
  ],
  tasksResolvers: {
    '_bitweek': 'bitcoin',
    '_learnjs': 'learnJs',
    '_SCP': 'scp',
    '_jsq': 'jsQ',
    '_guru': 'patternGuru'
  }
};