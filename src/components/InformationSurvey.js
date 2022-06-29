import React from "react";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";
import axios from "axios";
//import https from "https";

/*let agent = new https.Agent({
  rejectUnauthorized: false,
});*/

//http://5g-vue.projects.uom.lk:5000/

class InformationSurvey extends React.Component {
  onCompleteComponent(survey) {
    console.log("Result JSON:\n" + JSON.stringify(survey.data));
    if (survey.getValue("suggestions") === undefined) {
      survey.data = {
        Age: survey.data.Age,
        impairment: survey.data.impairment,
        expert: survey.data.expert,
        music: survey.data.music,
        Device: survey.data.Device,
        Brand: survey.data.Brand,
        rating1: survey.data.rating1,
        rating2: survey.data.rating2,
        rating3: survey.data.rating3,
        rating4: survey.data.rating4,
        rating5: survey.data.rating5,
        suggestions: "None",
      };
    }
    if (survey.getValue("Brand") === undefined) {
      survey.data = {
        Age: survey.data.Age,
        impairment: survey.data.impairment,
        expert: survey.data.expert,
        music: survey.data.music,
        Device: survey.data.Device,
        Brand: "Not Specified",
        rating1: survey.data.rating1,
        rating2: survey.data.rating2,
        rating3: survey.data.rating3,
        rating4: survey.data.rating4,
        rating5: survey.data.rating5,
        suggestions: survey.data.suggestions,
      };
    }
    if (survey.getValue("Age") === undefined) {
      survey.data = {
        Age: "Not Given",
        impairment: survey.data.impairment,
        expert: survey.data.expert,
        music: survey.data.music,
        Device: survey.data.Device,
        Brand: survey.data.Brand,
        rating1: survey.data.rating1,
        rating2: survey.data.rating2,
        rating3: survey.data.rating3,
        rating4: survey.data.rating4,
        rating5: survey.data.rating5,
        suggestions: survey.data.suggestions,
      };
    }

    axios
      .post(
        "http://5g-vue.projects.uom.lk:5000/",
        {
          data: survey.data,
          Age: survey.data.Age,
        }
        //agent
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    var json = {
      elements: [
        {
          type: "html",
          name: "pre-heading",
          html: `<p style="font-size: 110%; margin: auto;"
        }>
          <em>
            The following survey is conducted to perform a
            <strong>Subjective Audio Quality Assesment</strong> for the
            <strong>
              UoM - 5G IC Remote Music Collaboration Application with 5G
            </strong>
            , a project implemented by <strong>UoM - 5G Innovation Center.</strong>
          </em>
        </p>
        <h2 style="color: black;margin-top: 4%;">Instructions</h2>
        <p2 >
        <span style="font-weight: bold; font-size: 110%;">
          Please answer the following questions prior to the experimentation
        </span>  
          <span style="font-size: 90%;">
            **(Do not disclose any information you don’t want to)
          </span>
        </p2>`,
        },
        {
          name: "Age",
          type: "text",
          title: "Please enter your age:",
          autoComplete: "age",
        },
        {
          name: "impairment",
          type: "boolean",
          title: "Please cross off the unpreferred choice with a line",
          //titleLocation: "hidden",
          label:
            "Do you have a history with any hearing impairment (mild, moderate, severe, or profound) prior to the experiment ?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "expert",
          title: "Please cross off the unpreferred choice with a line",
          label:
            "Do you consider yourself an expert listener ? (i.e. Do you usually participate in these kinds of experiments as an expert listener)",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "music",
          title: "How often do you listen to music ?",
          isRequired: true,
          hasNone: true,
          colCount: 3,
          choices: [
            "Less than 5 minutes a day",
            "5 to 15 minutes a day",
            "15 to 45 minutes a day",
            "More than 45 minutes a day",
          ],
        },
        {
          type: "dropdown",
          name: "Device",
          title:
            "We highly reccomend you to use whatever the headphones you have. Even if you're using any-other reproduction device, please specify below.",
          isRequired: true,
          colCount: 0,
          choices: [
            "Headphones",
            "Earbuds & In-Ear Headphones",
            "Laptop Speakers",
            "Speaker System",
            "Boombox",
            "Portable Speaker",
            "Home Theatre System",
            "Subwoofer Speakers",
          ],
        },
        {
          name: "Brand",
          type: "text",
          title:
            "If you're using some type of headphones, please specify the manufacturer or the brand. (You can leave this blank if you don't know the brand or the manufacturer)",
          placeHolder: "Beats by Dre",
        },

        {
          type: "html",
          name: "instructions",
          html: `<article class="intro">
          \t\t
          <h2 class="intro__heading intro__heading--income title">
            \t\t
            Instruction on grading\t\t
          </h2>\t\t
          <div class="intro__body wysiwyg">
            \t\t
            <p>
              There are 6 different audio clips presented in this survey.
              Following each audio clip, there is a dropdown box where you can
              select a quality grade from 1-to 5. Please read the following
              guidelines and listen to the audio clips and instructions carefully.
              Then select a quality grade for each audio clip from the dropdown
              box right below them and finally submit the survey.
            </p>\t\t
            <p>
              <em>
                <strong> Guidelines to grade the audio quality </strong>
              </em>\t\t
            </p>\t\t
            <ul>
              \t\t
              <li>
                \t\t
                <p>
                  For each audio clip, there is a reference audio excerpt and a
                  test audio excerpt that follows it. You need to grade the test
                  audio excerpt by comparing it with the reference audio excerpt.
                </p>\t\t
              </li>
            </ul>\t\t
            <ul>
              \t\t
              <li>
                \t\t
                <p>
                  In each audio clip, first the reference audio will be played and
                  then the test audio. Then the process will be repeated once
                  again for your convenience. (Order will be as follows)\t\t
                  <ol>
                    <li>Reference audio</li> <li>Test audio, impaired </li>\t\t
                    <li>Reference audio (repeated)</li>
                    <li>Test audio, impaired (repeated).</li>
                  </ol>
                </p>\t\t
              </li>\t\t
              <p>
                \t\t
                <li>
                  \t\t
                  Based on your observation, please select a value that you think
                  is a suitable grade for each audio clip, from the dropdown box
                  that follows.\t\t
                </li>
              </p>\t\t
              <p>
                \t\t
                <li>
                  \t\t
                  Refer to the below Table 1 for the guidance on selecting a
                  grading category listed inside grading tables.\t\t
                </li>\t\t
              </p>\t\t
            </ul>\t\t
          </div>\t\t
        </article>`,
        },
        {
          type: "html",
          name: "grading table",
          html: `<style>
          table {
            border: 1px solid black;
            margin: auto;
            max-width: 75%;
          }
          </style>
          <style>
          th{
            border: 1px solid black;
            margin: auto;
            text-align: center;
          }
          </style>
          <style>
          td{
            border: 1px solid black;
            margin: auto;
            
          }
          </style>
          <div >
          <div >
            <div >
              <p style="width:100%;max-width:fit-content;margin:auto">Table 1. Unipolar discrete five-grade scale</p>
            </div>
            </br>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Quality</th>
                <th style="width:50%">Impairment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 Excellent</td>
                <td>5 Imperceptable</td>
              </tr>
              <tr>
                <td>4 Good</td>
                <td>4 Perceptable, but not annoying</td>
              </tr>
              <tr>
                <td>3 Fair</td>
                <td>3 Slightly annoying</td>
              </tr>
              <tr>
                <td>2 Poor</td>
                <td>2 Annoying</td>
              </tr>
              <tr>
                <td>1 Bad</td>
                <td>1 Very annoying</td>
              </tr>
            </tbody>
          </Table>
        </div>`,
        },

        {
          type: "html",
          name: "config1",
          html: `
        <div>Audio Clip 1 : </div>
        <br/>
        
        <audio controls="controls"
        src="/static/media/128n 6 2 V3.f876f5d7328311683396.wav">
            Your browser does not support the
            <code>audio</code> element.    
   `,
        },
        {
          type: "dropdown",
          name: "rating1",
          title: "What is your perceived quality",
          isRequired: true,

          hasNone: false,
          colCount: 0,
          choicesOrder: "dsc",
          choices: [
            "5 - Imperceptable",
            "4 - Perceptable",
            "3 - Slightly annoying",
            "2 - Annoying",
            "1 - Very annoying",
          ],
        },
        {
          type: "html",
          name: "config2",
          html: `
        <div>Audio Clip 2 : </div>
        <br/>
        
        <audio controls="controls"
        src="/static/media/64 8 V1.743bae547e3b68a44ce1.wav">
            Your browser does not support the
            <code>audio</code> element.    
   `,
        },
        {
          type: "dropdown",
          name: "rating2",
          title: "What is your perceived quality",
          isRequired: true,

          hasNone: false,
          colCount: 0,
          choicesOrder: "dsc",
          choices: [
            "5 - Imperceptable",
            "4 - Perceptable",
            "3 - Slightly annoying",
            "2 - Annoying",
            "1 - Very annoying",
          ],
        },
        {
          type: "html",
          name: "config3",
          html: `
        <div>Audio Clip 3 : </div>
        <br/>
        
        <audio controls="controls"
        src="/static/media/64 6 V1.13ae7aeefe173b481c86.wav">
            Your browser does not support the
            <code>audio</code> element.    
   `,
        },
        {
          type: "dropdown",
          name: "rating3",
          title: "What is your perceived quality",
          isRequired: true,

          hasNone: false,
          colCount: 0,
          choicesOrder: "dsc",
          choices: [
            "5 - Imperceptable",
            "4 - Perceptable",
            "3 - Slightly annoying",
            "2 - Annoying",
            "1 - Very annoying",
          ],
        },
        {
          type: "html",
          name: "config4",
          html: `
        <div>Audio Clip 4 : </div>
        <br/>
        
        <audio controls="controls"
        src="/static/media/128 4 V1.745c015194546b4d1cad.wav">
            Your browser does not support the
            <code>audio</code> element.    
   `,
        },
        {
          type: "dropdown",
          name: "rating4",
          title: "What is your perceived quality",
          isRequired: true,

          hasNone: false,
          colCount: 0,
          choicesOrder: "dsc",
          choices: [
            "5 - Imperceptable",
            "4 - Perceptable",
            "3 - Slightly annoying",
            "2 - Annoying",
            "1 - Very annoying",
          ],
        },
        {
          type: "html",
          name: "config5",
          html: `
        <div>Audio Clip 5 : </div>
        <br/>
        
        <audio controls="controls"
        src="/static/media/64 4.de746df1ae436405e8dc.wav">
            Your browser does not support the
            <code>audio</code> element.    
   `,
        },
        {
          type: "dropdown",
          name: "rating5",
          title: "What is your perceived quality",
          isRequired: true,

          hasNone: false,
          colCount: 0,
          choicesOrder: "dsc",
          choices: [
            "5 - Imperceptable",
            "4 - Perceptable",
            "3 - Slightly annoying",
            "2 - Annoying",
            "1 - Very annoying",
          ],
        },
        {
          type: "comment",
          name: "suggestions",
          title: "Please add any comments or suggestions if you have",
        },
      ],
    };
    var surveyRender = (
      <Survey.Survey
        json={json}
        showCompletedPage={true}
        showNavigationButtons={true}
        completeText="Submit"
        onComplete={this.onCompleteComponent}
      />
    );

    return <div>{surveyRender}</div>;
  }
}

export default InformationSurvey;
