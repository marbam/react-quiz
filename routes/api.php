<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/categories', 'CategoryController@getCategories');
Route::post('/save_question', 'QuestionController@save');

Route::get('count_questions/{category_id}', 'QuestionController@getQuestionCount');

Route::get('questions/{category_id}/{count}', 'QuestionController@getQuestions');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
