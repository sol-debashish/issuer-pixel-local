<ul class="list-unstyled">
    <li><strong>Industry :</strong> {{(null != $nodeItem && $nodeItem->industry!=null) ? $nodeItem->industry->description : ''}}</li>
    <li><strong>Node Type : </strong>{{$nodeLevel}}</li>
    <li><strong>Node Description : </strong>{{(null != $nodeItem) ? $nodeItem->description : ''}}</li>
    <li><strong>Node Code :</strong> {{(null != $nodeItem) ? $nodeItem->code : ''}}</li>
</ul>
