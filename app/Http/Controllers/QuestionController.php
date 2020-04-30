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
                'text' => $data[$i]
            ]);
        }
        return true;
    }
}
