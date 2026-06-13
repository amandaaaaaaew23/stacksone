;; Config updated 2026-06-13T01:24:27Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u74)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
