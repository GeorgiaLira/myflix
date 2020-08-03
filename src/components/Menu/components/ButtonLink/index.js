import React from 'react';

function ButtonLink(props) { 
//props: um objeto. className: o que alguém passar, href:"/" 

    return (
        <a className={props.className} href={props.href}>
        {props.children} 
        </a>
    );
}
// {props.children} => usa chaves pra inserir JavaScript dentro do html
//<a className={props.className} href={props.href}> //recebe o href do ButtonLink do index Menu

export default ButtonLink;//exporta para conseguir importar de outro local