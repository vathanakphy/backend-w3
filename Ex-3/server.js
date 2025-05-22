// server.js
import express from 'express';
import courses from "./course.js";
import { logger } from './logger.js';
import { handleQuery } from './validateQuery.js';
import { auth } from './auth.js';
const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses
app.use(express.json());
app.use(logger)
app.use(auth)
app.get('/departments/:dept/courses',handleQuery ,(req,res)=>{  
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    const coursesInDept = courses.filter((element)=>element.department === dept);
    let specificCourse = coursesInDept.filter((element)=>
        ((level)?element.level === level:true)
        && ((minCredits)?element.credits >=Number(minCredits):true)
        && ((maxCredits)?element.credits <=Number(maxCredits):true)
        && ((semester)?element.semester === semester :true)
        && ((instructor)?element.instructor === instructor :true)
    )
    if(specificCourse.length===0){
        res.json({
        message:'no course found..!'
    })
    }
    res.json({
        results:specificCourse,
        meta:{
            total:specificCourse.length
        }
    })
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
