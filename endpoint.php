<?php

include_once 'includes/Repo.php';

class API {
  private $method;
  private $param;
  private $repo;

  public function __construct()
  {

    $request = filter_input_array(INPUT_GET, array(
      'method' => FILTER_SANITIZE_STRING,
      'param' => FILTER_SANITIZE_STRING
    ));

    $this->method = $request['method'];
    $this->param = $request['param'];
    $this->repo = new Repo();
  }

  public function run()
  {
    if (in_array($this->method, array('get', 'put'))) {
      $result = array('message' => 'success', 'data' => $this->{$this->method}());
    } else {
      $result = array('message' => 'Invalid method');
    }

    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode($result);
    exit;
  }

  private function get()
  {
    $sql = <<<SQL
      SELECT *
        FROM user
SQL;

    if ($this->param) {
      $args = $this->decodeJSON();

      if (!empty($args)) {
        $conditions = array();
        foreach ($args as $key => $value) {
          $conditions[] = "{$key} = '{$value}'";
        }

        $conditions = implode(' AND ', $conditions);

        $sql .= " WHERE {$conditions}";
      }
    }

    return $this->repo->getArray($sql);
  }

  private function put() {
    $args = $this->decodeJSON();

    $result = $this->repo->setSql(<<<SQL
      INSERT INTO user (name_last, name_first, bluetooth_address, status, audio_file, last_seen) VALUES ('{$args["name_last"]}', '{$args["name_first"]}', '{$args["bluetooth_address"]}', '{$args["status"]}', '{$args["audio_file"]}', NOW())
SQL
    );

    echo json_encode(array('success' => $result ? true: false));
    exit;
  }

  private function decodeJSON()
  {
    $params = json_decode(html_entity_decode($this->param),true);

    $args = array();
    foreach ($params as $param) {
      $args[key($param)] = $param[key($param)];
    }

    return $args;
  }
}

$api = new API();
$api->run();