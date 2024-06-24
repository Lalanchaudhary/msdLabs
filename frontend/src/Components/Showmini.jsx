import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AllCards from './AllCards'
function Showmini() {
    const location = useLocation();
    const data = location.state.value;
    const [testData,setTestData]=useState([
        {
            title: "Thyroid Profile Test",
            Body: "The test assesses the thyroid gland's functioning and helps to diagnose hyperthyroidism or hypothyroidism.",
            price:299,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "TSH 3rd Generation Test ",
            Body: "The test measures the TSH levels and helps to diagnose the thyroid functioning.",
            price: 219,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "Thyroid Profile Free Test ",
            Body: "It is a group of blood tests that measures thyroid hormones and detect thyroid diseases.",
            price:599,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "FT4 & TSH 3rd Gen Panel ",
            Body: "The test measures the FT4 & TSH levels in the blood, which helps detect thyroid disease.",
            price:399,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "Thyroid Antibodies Panel (Anti TPO, Anti TG) Test",
            Body: "Anti Thyroid Peroxidase Antibodies (TPO), Anti Thyroglobulin Antibodies (ATG)",
            price:2700,
            fasting:"Not required",
            report:"15 hrs",
            sampleType:" Blood",
            type:"Thyroid"
        },
        {
            title: "Thyroid Profile Extensive",
            Body: "To check the thyroid function to diagnose hyperthyroidism, hypothyroidism, and other thyroid disorders.",
            price:2499,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:" Blood",
            type:"Thyroid"
        },
        {
            title: "Anti TPO (Anti Thyroperoxidase/ Microsomal) ",
            Body: "The test in bodily fluids, especially pleural or peritoneal fluid, helps diagnose tuberculosis by measuring ADA levels.",
            price:650 ,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "Adenosine Deaminase (ADA)-PUS",
            Body: "Thyroid peroxidase is a type of protein (called an enzyme) that cells in the thyroid gland use to make thyroid hormone. If these enzymes leak out into the bloodstream (as when thyroid cells are damaged) the immune system makes antibodies against these proteins.",
            price:1100,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Thyroid"
        },
        {
            title: "Glucose Fasting Test",
            Body: "It measures blood sugar levels after overnight fasting to check if the levels are in a healthy range.",
            price:99,
            fasting:"8-10 hours",
            report:"12 hrs",
            sampleType:" Blood",
            type:"Diabetes"
        },
        {
            title: "HBA1C Test  ",
            Body: "The HbA1c test, also known as glycated hemoglobin test, is a blood test that provides information about a person's average blood sugar levels over the past 2 to 3 months",
            price:299,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:" Blood",
            type:"Diabetes"
        },
        {
            title: "Glucose Random Test",
            Body: "It measures blood glucose levels at random hours to screen and monitor diabetes.",
            price:99,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:" Blood",
            type:"Diabetes"
        },
        {
            title: "Glucose PP (Post Prandial) Test",
            Body: "This test checks the body's response to sugar after a meal & aid doctor prescribes the treatment.",
            price:1099,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:" Urine, Blood",
            type:"Diabetes"
        },
        {
            title: "Pre Diabetic Screening Package",
            Body: "This test screens for prediabetes or diabetes in patients showing symptoms or are at higher risk.",
            price:499,
            fasting:"Not required",
            report:"15 hrs",
            sampleType:"Blood",
            type:"Diabetes"
        },
        {
            title: "Diabetes Profile- Advance",
            Body: "This test diagnoses & monitors diabetes and helps assess varied health conditions.",
            price:999,
            fasting:"8-10 hours",
            report:"15 hrs",
            sampleType:"Urine, Blood",
            type:"Diabetes"
        },
        {
            title: "Lipid Profile Test ",
            Body: "It measures cholesterol & triglycerides in the blood & screens your risk for cardiovascular disease.",
            price:320,
            fasting:"10-12 hours",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Heart"
        },
        {
            title: "AFB Stain Test (Acid Fast Bacilli)",
            Body: "It diagnoses AFB infection & active tuberculosis & monitors treatment response in infected patients.",
            price: 219,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Sputum, Urine, Fluids, Tissues",
            type:"Heart"
        },
        {
            title: "Thrombin Time Test ",
            Body: "TT test analyses the time taken for the fibrin clot in the blood sample. The test can screen the cause of excessive bleeding",
            price:800,
            fasting:"Not required",
            report:"24 hrs",
            sampleType:"Blood",
            type:"Heart"
        },
        {
            title: "High Sensitivity Troponin I Test",
            Body: "While measuring troponin levels, the test diagnoses a heart attack & monitors angina.",
            price:1350,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Heart"
        },
        {
            title: "Vitamin D Test",
            Body: "This measures vitamin D levels while diagnosing vitamin d deficiency or monitoring treatment.",
            price:499,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Vitamin"
        },
        {
            title: "Vitamin B12 Test",
            Body: "The test helps determine vitamin B12 deficiency and diagnose certain types of anemia.",
            price:499,
            fasting:"Not required",
            report:"12 hrs",
            sampleType:"Blood",
            type:"Vitamin"
        },
        {
            title: "Vitamin C (Ascorbic Acid) Test",
            Body: "To detect the presence of scurvy caused by deficiency of Vitamin C.",
            price:2800,
            fasting:"Not required",
            report:"4 days",
            sampleType:"Blood",
            type:"Vitamin"
        },
        {
            title: "Vitamin B6 (Pyridoxine) Test",
            Body: "Detects deficiency of Vitamin B6 that may cause anemia, depression, and weak immune function.",
            price:4300,
            fasting:"Not required",
            report:"6 days",
            sampleType:"Blood",
            type:"Vitamin"
        },
        {
            title: "Vitamin Profile",
            Body: "This test measures Vitamin levels and screens for vitamin D, B12 & micronutrient deficiency.",
            price:699,
            fasting:"Not required",
            report:"15 hrs",
            sampleType:"Blood",
            type:"Vitamin"
        },
        {
            title: "Vitamin Profile Comprehensive",
            Body: "The panel identifies the deficiencies of vitamins in the body to diagnose the cause of health issues.",
            price:6999,
            fasting:"Not required",
            report:"17 days",
            sampleType:"Blood",
            type:"Vitamin"
        },
      ])
    //   console.log(data);

    useEffect(()=>{
        const FilterData=testData.filter((ev)=>{
            return ev.type==data;
          })
          setTestData(FilterData);
    },[])


  return (
    <div>
        <Container>
            <h3 className='m-5'>Search Result for {data}</h3>
        </Container>
        <Container className='d-flex flex-wrap gap-4 justify-content-center'>
            {
                testData.map((row)=>{
                    return <AllCards data={row} />
                })
            }
        </Container>
      
    </div>
  )
}

export default Showmini
