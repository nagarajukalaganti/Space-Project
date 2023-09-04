import React, { useState } from "react";

const Faq = () => {
    const data = [
        {
            question: "Question 1?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, sapiente.",
        },
        {
            question: "Question 2?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, sapiente.",

        },
        {
            question: "Question 3?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, sapiente.",
        },
        {
            question: "Question 4?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, sapiente.",
        },
        {
            question: "Question 5?",
            answers: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, sapiente.",
        },
    ];

    const [selected, setSelected] = useState(null);

    const handleSelect = (i) => {
        
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i);
    }

    return (
        <>
            <h1 className="Heading">FAQs</h1>

            <section className="faq">
                <div className="item">
                    {data.map((item, i) => {
                        return (
                            <div className="wrapper" key={i}>
                                
                                <div className="question" onClick={() => handleSelect(i)}>
                                    <h3>{item.question}</h3>
                                    <img src={require("../../../Assets/up-arrow.png")} alt="" className={selected===i ? "reverse":""}/>
                                </div>

                                <div className={selected === i ? "answersshow" : "answers"}>
                                    <p>{item.answers}</p>
                                </div>
                            </div>
                        )


                    })
                    }
                </div>

            </section>
        </>
    )
}

export default Faq