;; Config updated 2026-06-13T00:49:48Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u72)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
