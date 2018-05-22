<?php
include __DIR__ . '/../../env.php';

if (ENV == 'dev') {
?>

<link rel="stylesheet" href="../../dist/<?php echo $_VERSION; ?>/theme.css" />
<script src="../../dist/<?php echo $_VERSION; ?>/dll.js"></script>
<script src="../../dist/<?php echo $_VERSION; ?>/antd.js"></script>
<script src="../../dist/<?php echo $_VERSION; ?>/uf.js"></script>

<?php
} else {
?>

<link rel="stylesheet" href="../../v/<?php echo $_VERSION; ?>/theme.min.css" />
<script src="../../v/<?php echo $_VERSION; ?>/dll.min.js"></script>
<script src="../../v/<?php echo $_VERSION; ?>/antd.min.js"></script>
<script src="../../v/<?php echo $_VERSION; ?>/uf.js"></script>

<?php
}
?>

<style>html, body {height: auto !important;}</style>
