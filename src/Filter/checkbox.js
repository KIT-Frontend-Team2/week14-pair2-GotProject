import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

//collapse는 접어주는거 열면 보이는거
//여기에는 템플릿 체크박스 댓글순,업데이트순,생성순
const continents = [
	{
		id: 1,
		name: '업데이트new',
	},
	{
		id: 2,
		name: '댓글new',
	},
	{
		id: 3,
		name: '생성new',
	},
]

function CheckBox(props) {
	const [checked, setChecked] = useState([])
	const [isCollapseOpen, setIsCollapseOpen] = useState(false)
	//아싸 해결 true를 false로 바꿔서 해결완 ㅎㅎㅎㅎㅎㅎㅎ 죽것다
	//checkbox일단 다 체크되어있는상태로만든다음에 하나씩풀면 그거 빼고 보여주는식으로 하고싶음. 될까?너무어려운거하나 나주제?

	//이거 이벤트로 받아와야할거같은데 내가 value로 줘버려서 하...현타온다 다시하는거 실화냐
	const handleChange = value => {
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked)
		props.handleFilters(newChecked)
		//이거 위로 props로 보내서 넘겨줄려고.....될려나...하아....
	}

	const toggleCollapse = () => {
		setIsCollapseOpen(!isCollapseOpen)
	}

const renderCheckboxLists = () => {
  return continents.map((value, index) => (
    <React.Fragment key={index}>
		<label>
      <input
        type="checkbox"
        onChange={() => handleChange(value.id)}
        checked={checked.indexOf(value.id) === -1 ? false : true}
		/>
      {value.name}
		</label>
    </React.Fragment>
  ));
};

	return (
		<div>
			<button onClick={toggleCollapse}>
        {isCollapseOpen ? '▼' : '▲'}
      </button>
			<Collapse defaultActiveKey={['0']} isOpened={isCollapseOpen}>
				
					{renderCheckboxLists()}
				
			</Collapse>
		</div>
	)

}
export default CheckBox

// import { useState } from 'react'

// function Checkbox() {
// 	const CheckBox = () => {
// 		const [checkboxes, setCheckboxes] = useState({
// 			optionA: false,
// 			optionB: false,
// 			optionC: false,
// 		})
// 		const [filteredData, setFilteredData] = useState([])

// 		const handlerChange = e => {
// 			const { name, checked } = e.target

// 			setCheckboxes({
// 				...checkboxes,
// 				[name]: checked,
// 			})
// 		}

// 		const FilterData = () => {
// 			const newFilteredData = props.data.filter(item => {
// 				if (checkboxes.optionA && item.category === 'A') return true
// 				if (checkboxes.optionB && item.category === 'B') return true
// 				if (checkboxes.optionC && item.category === 'C') return true

// 				return false
// 			})
// 			setFilteredData(newFilteredData)
// 		}

// 		return (
// 			<>
// 				<input
// 					type="checkbox"
// 					name="optionA"
// 					checked={checkboxes.optionA}
// 					onChange={handleCheckboxChange}
// 				/>
// 				Category A
// 				<input
// 					type="checkbox"
// 					name="optionB"
// 					checked={checkboxes.optionB}
// 					onChange={handleCheckboxChange}
// 				/>
// 				Category B
// 				<input
// 					type="checkbox"
// 					name="optionC"
// 					checked={checkboxes.optionC}
// 					onChange={handleCheckboxChange}
// 				/>
// 				Category C<button onClick={FilterData}>Apply Filters</button>
// 				{filteredData.map((item, index) => (
// 					<p key={index}>{item.name}</p>
// 				))}
// 			</>
// 		)
// 	}
// }
