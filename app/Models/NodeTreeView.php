<?php

namespace App\Models;

use Illuminate\Support\Str;

class NodeTreeView extends BaseCategoryModel {
    protected $table = 'node_tree_view';

    protected static $logName = 'node_tree_view';
    protected $nodeType = 'node tree view';

}
