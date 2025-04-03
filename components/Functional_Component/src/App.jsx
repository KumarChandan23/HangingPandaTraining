
import './App.css'
import Class_Component from './Class_Component'
import Product1 from './components/composition/composition_with_children/Product1'
import Product2 from './components/composition/composition_with_children/Product2'
import CustormeComposition from './components/composition/composition_with_custom_component/CustormeComposition'
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering'
import UseEffect from './components/hooks/useEffect'
import FilterLargetListWithMemo from './components/hooks/useMemo/FilterLargetListWithMemo'
import WithMemo from './components/hooks/useMemo/WithMemo'
import WithoutUseMemo from './components/hooks/useMemo/WithoutUseMemo'
import UseRefC from './components/hooks/UseRefC';
import UseState from './components/hooks/useState'
import PropComponent from './components/props/PropComponent'
import Functional_Component from './Functional_Component'

function App() {

  return (
    <>
      {/* <Functional_Component />*/}
      {/* <Class_Component />  */}
      {/* <PropComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <Product1 />
      <Product2 /> */}
      {/* <CustormeComposition></CustormeComposition> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <WithoutUseMemo />
      <WithMemo /> */}
      {/* <FilterLargetListWithMemo />
      <Test /> */}
      <UseRefC />
    </>
  )
}


export default App
