import { useState, useEffect } from "react"

const Formulario = () => {
     // retorna o valor e uma função para altera-lo
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect( ( ) => {
        console.log("O componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, [] );


    useEffect( ( ) => {
        console.log("O nome mudou");
    }, [nome] );

    useEffect( ( ) => {
        console.log("Materia A mudou para:" + materiaA)
    },[materiaA, materiaB, materiaC]);



    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }


    const RenderizaResultado = () => { 
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        }
        else{
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
        
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item =>
                     <li key={item}>{item}</ li>
                )}
            </ul>


            <input type="text" placeholder="Seu nome"onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>    
            {RenderizaResultado()}
        </form>
    )
}

export default Formulario

