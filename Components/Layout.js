const Layout = (props) => (
<div>
    <div className='layoutStyle'> 
            <h1>Let's learn about countries</h1>
            <span className='linkStyle'> - Created Using Rest Countries API </span>
            {props.children} {/*The children that is in every instance of the Layout component*/}
    </div>
    {/*Global styles which will affect all elements*/}
    <style global-jsx>
            {`    
            .layoutStyle{
                margin: 30px;
                padding: 30px;
              
                },
            body{
                background-color: rgb(236, 236, 236);
            },
            .linkStyle{
                margin: none;
                padding: none;
            }
    `}
    </style>
    {/*These styles will only affect this component*/}
    <style jsx> 
            {`
            .header{
                margin:3px;
            }
            `}
    </style>
</div>
)

export default Layout; //Export Layout component