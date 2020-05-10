const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    NO:  Symbol("no"),
    Yes: Symbol("yes"),
    LISTENING: Symbol("listening"),
    READING:Symbol("Reading"),
    READINGSTRATEGIES: Symbol("ReadingStrategies"),
    WRITING:Symbol("Writing"),
    WRITINGQUESTION:Symbol("Writing Question"),
    WRITINGSTRATEGIES:Symbol("Writing Strategies"),
    WRITINGSTRUCTURE:Symbol("Writing Structure"),
    SPEAKING:Symbol("Speaking"),
    SPEAKINGSTRATEGIES:Symbol("Speaking Strategies"),
    CONGRATULATION:Symbol("Congratulations")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "IELTS Preperation App!!! Ready to learn?? YES or NO?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.NO;
                break;
            case GameState.NO:
            if(sInput.toLowerCase().match("yes")){
                sReply = "Which module would you like to prepare?? Listening , Reading , Writing or Speaking"
                this.stateCur = GameState.Yes;
            }else{
                sReply = "Come again next time to learn more!!!! Type 'YES' to learn";
                this.stateCur = GameState.NO;
            }
            break;
            case GameState.Yes:
            if(sInput.toLowerCase().match("listening")){
                sReply = "Welcome to listening section!!! There are 4 section in this module. For each section there will be 10 questions. Which section would you like to learn section 1, section 2, section 3 or section 4"
                this.stateCur = GameState.LISTENING;   
            }
           else if(sInput.toLowerCase().match("reading")){
                sReply = "Welcome to Reading reading section!!! There will be 3 sections in this module.Which section would you like to learn section 1, section 2,  or section 3"
                this.stateCur = GameState.READING;   
            }
            else if(sInput.toLowerCase().match("writing")){
                sReply = "Welcome to Writing  section!!! Press section 1 for Writing Task 1 and section 2 for Writing Task 2"
                this.stateCur = GameState.WRITING;   
            }
            else if(sInput.toLowerCase().match("speaking")){
                sReply = "Welcome to Speaking section!!! To know more type 'next'"
                this.stateCur = GameState.SPEAKING;   
            }
            
            else{
                sReply="Not valid module. Type 'yes' to learn next time";
                this.GameState.NO;
            }
            break;
            case GameState.LISTENING:
            if(sInput.toLowerCase().match("section 1")){
                sReply = " In this section introduction type of questions will be asked.This will be the conversation between 2 or more persons. The audio tape will be played for 1 to 2 minute and you will be writing the answer in your answer sheet. Types of the question are: Fill in the blanks, MCQ.Press 'done' "
                this.stateCur = GameState.CONGRATULATION;
            }

            else if(sInput.toLowerCase().match("section 2")){
                sReply = "In this section map will be asked. It would be monologue. Only one person will be speaking.Press 'done'"
                this.stateCur = GameState.CONGRATULATION;   
            }
            
           else if(sInput.toLowerCase().match("section 3")){
            sReply = "In this section there will be conversation between 2 or more people. Generally , in this section there is conversation regarding academic lecture,theory or so on.Press 'done' "
            this.stateCur = GameState.CONGRATULATION;   
            }
            else if(sInput.toLowerCase().match("section 4")){
                sReply = "In this section there will be monologue. The speaker tells about research or article. Type of questions are fill in the blanks or MCQ.Press 'done'"
                this.stateCur = GameState.CONGRATULATION;   
            }
            else{
                sReply = "Invalid section !!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.READING:
            if(sInput.toLowerCase().match("section 1")){
                sReply = "In this section 1 paragraph will be provided to you. You need to read and give the appropriate answers. 1. Match the Headings 2. True, False or Not given 3. Matching paragraph information 4. MCQ . Type 'next'"
                this.stateCur = GameState.READINGSTRATEGIES;
            }

            else if(sInput.toLowerCase().match("section 2")){
                sReply = "In this section 1 paragraph will be provided to you. You need to read and give the appropriate answers. 1. Match the Headings 2. True, False or Not given 3. Matching paragraph information 4. MCQ . Type 'next'"
                this.stateCur = GameState.READINGSTRATEGIES;   
            }
            
           else if(sInput.toLowerCase().match("section 3")){
            sReply = "In this section 1 paragraph will be provided to you. You need to read and give the appropriate answers. 1. Match the Headings 2. True, False or Not given 3. Matching paragraph information 4. MCQ . Type 'next'"
            this.stateCur = GameState.READINGSTRATEGIES;   
            }
           
            else{
                sReply = "Invalid section !!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.READINGSTRATEGIES:
            if(sInput.toLowerCase().match("next")){
                sReply = "1.If this type of question is on the test, do it first. 2. Don’t look at the headings. 3.Read the first one or two sentences and the last sentence of each paragraph to understand the general meaning of the paragraph. Don’t worry about highlighting keywords in the test. Try to sum up the general meaning of each paragraph in one or two words. 4.Look at the headings and identify keywords within each heading.Press 'done'"
               
                this.stateCur = GameState.CONGRATULATION;
            }

            
            else{
                sReply = "Invalid question!!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.WRITING:
            if(sInput.toLowerCase().match("section 1")){
                sReply="Details for Writing task 1. You must write 150 words or more.You should spend around 20 minutes on this part of the test.Task 1 is worth 1/3 of your total mark on the Writing test.You will be assessed in four areas:Task Achievement (25%) Coherence and Cohesion (25%) Lexical Resource (25%) Grammatical Range and Accuracy (25%). To know about structure press 1"
                this.stateCur = GameState.WRITINGSTRUCTURE;
            }

            else if(sInput.toLowerCase().match("section 2")){
                sReply="You must write 250 words or more.You should spend around 40 minutes on this part of the test.Task 2 is worth 2/3 of your total mark on the Writing test. You will be assessed in four areas:Task Achievement (25%) ,Coherence and Cohesion (25%),Lexical Resource (25%),Grammatical Range and Accuracy (25%). To know about structure press 2"
                this.stateCur = GameState.WRITINGSTRUCTURE;   
            }
           
            else{
                sReply = "Invalid section !!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.WRITINGSTRUCTURE:
            if(sInput.toLowerCase().match("1")){
                sReply="Paragraph 1 (Introduction) Sentence 1- Paraphrase Question Paragraph 2 (Overview) Sentence 1- Overview of first main feature Sentence 2- Overview of second main feature Sentence 3- Make general comparison, if appropriate Paragraph 3 (Details of significant feature 1) Sentence 1- Supporting details Sentence 2- Supporting details Sentence 3- Supporting details/comparison details, if appropriate Paragraph 4 (Details of significant feature 2) Sentence 1- Supporting details Sentence 2- Supporting details Sentence 3- Supporting details/Comparison details, if appropriate. To know about type of question press 1"
                this.stateCur = GameState.WRITINGQUESTION;
            }

            else if(sInput.toLowerCase().match("2")){
                sReply=" Introduction Sentence 1- Paraphrase Question Sentence 2- Thesis Statement (It is agreed…/It is disagreed…/This essay agrees/disagrees…) Sentence 3- Outline Sentence (This essay will discuss….) Main Body Paragraph 1  Sentence 1- Topic Sentence Sentence 2- Explain Topic Sentence Sentence 3- Example Main Body Paragraph 2 Sentence 1- Topic Sentence Sentence 2- Explain Topic Sentence Sentence 3- Example Conclusion Sentence 1- Summary and opinion. To know about type of question press 2"
                this.stateCur = GameState.WRITINGQUESTION;   
            }
           
            else{
                sReply = "Invalid entry !!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.WRITINGQUESTION:
            if(sInput.toLowerCase().match("1")){
                sReply="There are 5 types of report writing. 1. Table 2. Pie Chart 3. Line Graph 4. Process Chart 5. Map. To know about strategies press next"
                this.stateCur = GameState.WRITINGSTRATEGIES;
            }

            else if(sInput.toLowerCase().match("2")){
                sReply="There are 4 types of question in essay writing. 1. Agree or Disagree 2. Problem and Solution 3.Discussion Essay 4. Advantages and disadvantages.To know about strategies press next"
                this.stateCur = GameState.WRITINGSTRATEGIES;    
            }
           
            else{
                sReply = "Invalid entry !!!! Type 'yes' to start again" 
                this.stateCur = GameState.NO;
            }
            break;

            case GameState.WRITINGSTRATEGIES:
            if(sInput.toLowerCase().match("next")){
               sReply="There are 5 Strategies. 1. Understand 2. Identify 3. Fix 4. Practice and Feedback 5.Improvement. Type 'done'"
                this.stateCur = GameState.CONGRATULATION;
            }
            break;

            case GameState.SPEAKING:
            if(sInput.toLowerCase().match("next")){
                sReply="Part 1 is about YOU. They will ask you familiar, everyday questions about your life. This will last around 4-5 minutes.Part 2 is sometimes called the ‘long turn’. You will be given a cue card and you will have 1 minute to prepare your answer. You will then be asked to speak for up to 2 minutes.Part 3 is more abstract. This is your opportunity to really develop your answers and discuss the issues brought up by the examiner. This will last 4-5 minutes.To know about strategies type next"
                this.stateCur = GameState.SPEAKINGSTRATEGIES;  
            }
            break;

            case GameState.SPEAKINGSTRATEGIES:
            if(sInput.toLowerCase().match("next")){
                sReply="When you get the cue card you will be given one minute to write down some ideas. You are going to use this time wisely by using the following structure. On the piece of paper provided write down five headings with a little space between each one.Introduction, Past, Description, Opinion, Future. Press 'done'"
                this.stateCur = GameState.CONGRATULATION;  
            }
            break;

            case GameState.CONGRATULATION:
            if(sInput.toLowerCase().match("done")){
            sReply = "You have learned all things required for this module.Press start to begin again"
            this.stateCur = GameState.WELCOMING;
            }
            
        }
        return(sReply);
    }
}