<?php

namespace App\Http\Controllers;

use App\Question;
use App\Answer;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function save(Request $request) {
        $data = $request->all();

        $question = Question::create([
            'category_id' => $data[0],
            'text' => $data[1]
        ]);

        for ($i = 2; $i <= 5; $i++) {
            Answer::create([
                'question_id' => $question->id,
                'text' => $data[$i],
                'correct' => ($data[6]+1 == $i ? 1: 0)
            ]);
        }
        // $data[6] contains the correct answer, 1-4.

        return true;
    }

    public function getQuestionCount($category_id) {
        $count = Question::where('category_id', $category_id)->count();
        $options = [];
        if (!$count) {
            $options[] = "No Questions!";
            return $options;
        }
        if ($count >= 5) {
            $options[] = 5;
        }
        if ($count >= 10) {
            $options[] = 10;
        }
        if (!in_array($count, [5, 10])) {
            $options[] = $count;
        }
        return $options;
    }

    public function getQuestions($category_id, $count) {
        return  Question::where('category_id', $category_id)
                        ->with('answersInRandomOrder:id,text,correct,question_id')
                        ->inRandomOrder()
                        ->limit($count)
                        ->get(['id', 'text'])
                        ->toArray();
    }
}
