import React ,{ Component} from 'react';
import TechItem from './TechItem';
class TechList extends Component {
  state = {
    newTech: '',
    techs : [],
  };

  
  //CICLO DE VIDA DE UM COMPONENT:
  //executado assim que um componente é criado.
  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({ techs: JSON.parse(techs) });
    }

  }
  //Execultado sempre que houver alteração em props ou estado
  componentDidUpdate(_, prevState){
    // this.props, this.state
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  //executado quando o componente deixa de existir
  componentWillUnmount(){
    
  }

  handleInmputChance = e => {
    console.log(e.target.value)
    this.setState({ newTech:e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '' 
    })
  }

  handleDelete = (tech)=> {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  }

  render() {
    return(
      <>
      <form onSubmit={ this.handleSubmit }>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map(tech => 
        <TechItem 
          key={tech} 
          tech={tech} 
          onDeleteFunction={() => this.handleDelete(tech)} 
        /> 
       )}
       
      </ul>
      <input 
        type="text"
        onChange={this.handleInmputChance}
        value={this.state.newTech}
      />
      <button type="submit">Enviar</button>
      </form>
      </>
    )
  }
}

export default TechList;