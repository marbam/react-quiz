<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\Question;
use App\Answer;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $c = Category::create(['name' => 'Capitals']);

        $q1 = Question::create(['text' => 'What is the capital of England?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q1->id, 'text' => 'London', 'correct' => 1]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Paris', 'correct' => 0]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Munich', 'correct' => 0]);
        Answer::create(['question_id' => $q1->id, 'text' => 'The Hague', 'correct' => 0]);

        $q2 = Question::create(['text' => 'What is the capital of France?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q2->id, 'text' => 'London', 'correct' => 0]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Paris', 'correct' => 1]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Munich', 'correct' => 0]);
        Answer::create(['question_id' => $q2->id, 'text' => 'The Hague', 'correct' => 0]);

        $q3 = Question::create(['text' => 'What is the capital of Germany?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q3->id, 'text' => 'London', 'correct' => 0]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Paris', 'correct' => 0]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Munich', 'correct' => 1]);
        Answer::create(['question_id' => $q3->id, 'text' => 'The Hague', 'correct' => 0]);

        $q4 = Question::create(['text' => 'What is the capital of The Netherlands?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q4->id, 'text' => 'London', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Paris', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Munich', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'The Hague', 'correct' => 1]);

        $q5 = Question::create(['text' => 'What is the capital of Wales?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Cardiff', 'correct' => 1]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Prague', 'correct' => 0]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Camberra', 'correct' => 0]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Stockholm', 'correct' => 0]);

        $q6 = Question::create(['text' => 'What is the capital of The Czech Republic?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Cardiff', 'correct' => 0]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Prague', 'correct' => 1]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Camberra', 'correct' => 0]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Stockholm', 'correct' => 0]);

        $q7 = Question::create(['text' => 'What is the capital of Australia?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Cardiff', 'correct' => 0]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Prague', 'correct' => 0]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Camberra', 'correct' => 1]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Stockholm', 'correct' => 0]);

        $q8 = Question::create(['text' => 'What is the capital of Sweden?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Cardiff', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Prague', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Camberra', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Stockholm', 'correct' => 1]);

        $q9 = Question::create(['text' => 'What is the capital of Spain?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Madrid', 'correct' => 1]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Lisbon', 'correct' => 0]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Camberra', 'correct' => 0]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Stockholm', 'correct' => 0]);

        $q10 = Question::create(['text' => 'What is the capital of Portugal?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Madrid', 'correct' => 0]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Lisbon', 'correct' => 1]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Camberra', 'correct' => 0]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Stockholm', 'correct' => 0]);

        // ------------- BUFFY ??? ------------------ //

        $c = Category::create(['name' => 'Buffy']);

        $q1 = Question::create(['text' => 'What is her middle name?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Anne', 'correct' => 1]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Rosenburg', 'correct' => 0]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Harris', 'correct' => 0]);
        Answer::create(['question_id' => $q1->id, 'text' => 'Rupert', 'correct' => 0]);

        $q2 = Question::create(['text' => 'What is Willow\'s surname?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Anne', 'correct' => 0]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Rosenburg', 'correct' => 1]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Harris', 'correct' => 0]);
        Answer::create(['question_id' => $q2->id, 'text' => 'Rupert', 'correct' => 0]);

        $q3 = Question::create(['text' => 'What is Xander\'s surname?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Anne', 'correct' => 0]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Rosenburg', 'correct' => 0]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Harris', 'correct' => 1]);
        Answer::create(['question_id' => $q3->id, 'text' => 'Rupert', 'correct' => 0]);

        $q4 = Question::create(['text' => 'What is Giles\' forename?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Anne', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Rosenburg', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Harris', 'correct' => 0]);
        Answer::create(['question_id' => $q4->id, 'text' => 'Rupert', 'correct' => 1]);

        $q5 = Question::create(['text' => 'What is Buffy\'s mother called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Joyce', 'correct' => 1]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Dawn', 'correct' => 0]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Olivia', 'correct' => 0]);
        Answer::create(['question_id' => $q5->id, 'text' => 'Mr. Gordo', 'correct' => 0]);

        $q6 = Question::create(['text' => 'What is Buffy\'s sister called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Joyce', 'correct' => 0]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Dawn', 'correct' => 1]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Olivia', 'correct' => 0]);
        Answer::create(['question_id' => $q6->id, 'text' => 'Mr. Gordo', 'correct' => 0]);

        $q7 = Question::create(['text' => 'What is Giles\' Season 4 girlfriend called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Joyce', 'correct' => 0]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Dawn', 'correct' => 0]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Olivia', 'correct' => 1]);
        Answer::create(['question_id' => $q7->id, 'text' => 'Mr. Gordo', 'correct' => 0]);

        $q8 = Question::create(['text' => 'What is Buffy\'s stuffed toy called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Joyce', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Dawn', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Olivia', 'correct' => 0]);
        Answer::create(['question_id' => $q8->id, 'text' => 'Mr. Gordo', 'correct' => 1]);

        $q9 = Question::create(['text' => 'What is the second slayer in the show, called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Kendra', 'correct' => 1]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Faith', 'correct' => 0]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Kennedy', 'correct' => 0]);
        Answer::create(['question_id' => $q9->id, 'text' => 'Drusilla', 'correct' => 0]);

        $q10 = Question::create(['text' => 'What is the third slayer in the show, called?', 'category_id' => $c->id]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Kendra', 'correct' => 0]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Faith', 'correct' => 1]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Kennedy', 'correct' => 0]);
        Answer::create(['question_id' => $q10->id, 'text' => 'Drusilla', 'correct' => 0]);

        // $this->call(UserSeeder::class);
    }
}
