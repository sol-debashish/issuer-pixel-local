<?php
/**
 * Created by PhpStorm.
 * User: SOL-WEB-10
 * Date: 10/14/2019
 * Time: 3:41 PM
 */

namespace App\Repositories;


interface RepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function show($id);
}