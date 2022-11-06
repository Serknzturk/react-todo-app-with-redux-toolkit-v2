const dbMock = [
	{
		id:0,
		title:'Handle the UI',
		checked:false,
		date:{
			d:'06',
			m:'11',
			y:'2022'
		}
	},
	{
		id:1,
		title:'Feed the cats',
		checked:false,
		date:{
			d:'05',
			m:'11',
			y:'2022'
		}
	},
	{
		id:2,
		title:'Take the dogs out',
		checked:true,
		date:{
			d:'04',
			m:'11',
			y:'2022'
		}
	},
	{
		id:3,
		title:'Go for shopping and get some milk',
		checked:false,
		date:{
			d:'03',
			m:'11',
			y:'2022'
		}
	}
];
const preloadedDbMock = {
	preloadedState:{
		allToDos:{
			todos:dbMock
		}
	}
}
export default preloadedDbMock;