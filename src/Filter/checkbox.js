import { useState } from "react"


function Checkbox(){

    const CheckBox = () => {
        const [checkboxes, setCheckboxes] = useState({
          optionA: false,
          optionB: false,
          optionC: false,
        });
        const [filteredData, setFilteredData] = useState([]);
        
        const handlerChange = (e) => {
            const { name, checked } = e.target;
            
            setCheckboxes({
                ...checkboxes, 
                [name]: checked,
            });
        };
        
        const FilterData = () => {
            const newFilteredData = props.data.filter((item) => {
                if (checkboxes.optionA && item.category === 'A') return true;
                if (checkboxes.optionB && item.category === 'B') return true;
                if (checkboxes.optionC && item.category === 'C') return true;
                
                return false;
                
            })
            setFilteredData(newFilteredData);
        };
    
    



        return (
            <>
              <input
                type="checkbox"
                name="optionA"
                checked={checkboxes.optionA}
                onChange={handleCheckboxChange}
              />
              Category A
              <input
                type="checkbox"
                name="optionB"
                checked={checkboxes.optionB}
                onChange={handleCheckboxChange}
              />
              Category B
              <input
                type="checkbox"
                name="optionC"
                checked={checkboxes.optionC}
                onChange={handleCheckboxChange}
              />
              Category C
              <button onClick={FilterData}>Apply Filters</button>
              {filteredData.map((item, index) => (
                <p key={index}>{item.name}</p>
              ))}
            </>
          );
          
              };

}
export default Checkbox;