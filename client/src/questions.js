export default [
	{
		question: 'Everything in React is a _____________',
		options: ['Module', 'Component', 'Package', 'Class'],
		answer: 1,
	},
	{
		question: 'What is the second argument for setState useful for?',
		options: [
			'To invoke code after the setState operation is done',
			'To replace the state completely instead of the default merge action',
			'To access the previous state before the setState operation',
		],
		answer: 0,
	},
	{
		question: 'How many elements does a react v16.6 component can return?',
		options: ['2 Elements', '1 Element', 'Multiple Elements', 'None of These'],
		answer: 2,
	},
	{
		question: 'What is state in React?',
		options: [
			'A persistant storage.',
			'An internal data store (object) of a component.',
		],
		answer: 1,
	},
	{
		question: 'What is Babel?',
		options: [
			'A transpiler.',
			'An interpreter',
			'A Compiler',
			'Both Compiler and Transpilar',
		],
		answer: 3,
	},
	{
		question: 'ReactJS covers _________',
		options: [
			'User Interface layer in an application',
			'Data layer in an application',
			'Both a and b',
			'None of above',
		],
		answer: 0,
	},
	{
		question: 'ReactJS uses _____ to increase performance',
		options: ['Virtual DOM', 'Original DOM', 'Both of above', 'None of above'],
		answer: 0,
	},
	{
		question: 'React is _______',
		options: [
			'Component based',
			'Module based',
			'Both of above',
			'None of above',
		],
		answer: 0,
	},
	{
		question: 'props in react can ________',
		options: [
			'Be changed inside the component',
			'Not be changed in the component',
			'Be changed in side other component',
			'None of above',
		],
		answer: 1,
	},
	{
		question:
			'How can you access the state of a component from inside of a member function?	',
		options: [
			'this.getState()',
			'this.prototype.stateValue	',
			'this.state',
			'this.values',
		],
		answer: 3,
	},
	{
		question: 'What is a controlled input element?',
		options: [
			'An input element with the controlled flag',
			'An input element whose value is being controlled by a component’s state',
			'An input element that can only accept a list of characters',
			'An input element that is controlled by the value of another input element',
		],
		answer: 1,
	},
	{
		question:
			'What function can be used to change the state of a React componently?',
		options: [
			'this.setState',
			'this.changeState',
			'this.State = {}',
			'this.modifyState',
		],
		answer: 0,
	},
	{
		question:
			'What is the declarative way to render a dynamic list of components based on values in an array',
		options: [
			'Using the reduce array method',
			'With a for/while loop',
			'Using the <Each /> component',
			'Using the Array.map() method',
		],
		answer: 3,
	},
	{
		question:
			'When it is recommended to pass this.setState as a function instead of an object?',
		options: [
			'When the new state should completely replace the old state',
			'When the new state depends on the old state',
			'When the new state does not depend on the old state',
		],
		answer: 1,
	},
	{
		question:
			'What will happen if you render an input element with disabled = {false}',
		options: [
			'It will be rendered as enabled',
			'It will be rendered as disabled',
			'It will not be rendered at all',
		],
		answer: 0,
	},
];
