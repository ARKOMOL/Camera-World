import React from 'react';

const Blogs = () => {
    return (
    <div>
            <div>  
             <h1 className='text-3xl mt-5 mb-4'>
                 What is Context API
             </h1>  
             <p>
                 Context API is a way where we can pass any data anywhere without prop drilling.Basically in this way we can pass data grandpartent to parent to child. But in Context api it is easy way to pass data any where.To use Context API we need to use React.CreatContext().It returns a consumer and a provider.Provider will hold the "store" and be the parent of all the components that might need that store.
             </p>
        </div>
        <div>
        <h1 className='text-3xl mt-9 mb-4'>
        What is Semantic Tag
            </h1>
            <p>
                In HTML there are so many tags.But sometimes this is complicated to make a website with this tag. Semantic tag or element clearly describes its meaning to both the browser and the developer.In Semantic tag there are some specific tag..like Header tag, Nav tag,Section tag,Article tag,footer tag etc.With this tag we can make a website easliy.That's it's a most usefull tag or element for us  
                </p>
        </div>
    </div>
    );
};

export default Blogs;